<?php

namespace App\Evaluation\Infrastructure;

use App\Evaluation\Domain\PhpStructure;
use PhpParser\Node;
use PhpParser\Node\Stmt\Class_;
use PhpParser\Node\Stmt\ElseIf_;
use PhpParser\Node\Stmt\If_;
use PhpParser\Node\Stmt\Interface_;
use PhpParser\NodeTraverser;
use PhpParser\NodeVisitorAbstract;
use PhpParser\ParserFactory;

final class PhpAstParser
{
    private const LARGE_IF_ELSE_THRESHOLD = 3;

    public function parse(string $code): ?PhpStructure
    {
        $parser = (new ParserFactory())->createForNewestSupportedVersion();
        try {
            $ast = $parser->parse($code);
        } catch (\Throwable) {
            return null;
        }
        if ($ast === null) {
            return null;
        }

        $visitor = new class extends NodeVisitorAbstract {
            public bool $hasInterface = false;
            public bool $hasAbstractClass = false;
            public int $concreteClassCount = 0;
            public int $maxIfElseBranches = 0;
            public bool $hasDelegation = false;

            public function enterNode(Node $node): void
            {
                if ($node instanceof Interface_) {
                    $this->hasInterface = true;
                }
                if ($node instanceof Class_ && $node->isAbstract()) {
                    $this->hasAbstractClass = true;
                }
                if ($node instanceof Class_ && !$node->isAbstract() && $node->name !== null) {
                    $this->concreteClassCount++;
                }
                if ($node instanceof If_) {
                    $branches = 1;
                    $else = $node->else;
                    while ($else !== null) {
                        $branches++;
                        if ($else instanceof ElseIf_) {
                            $else = $else->else;
                        } else {
                            break;
                        }
                    }
                    if ($branches > $this->maxIfElseBranches) {
                        $this->maxIfElseBranches = $branches;
                    }
                }
                if ($node instanceof Node\Expr\MethodCall || $node instanceof Node\Expr\PropertyFetch) {
                    $this->hasDelegation = true;
                }
            }
        };

        $traverser = new NodeTraverser();
        $traverser->addVisitor($visitor);
        $traverser->traverse($ast);

        return new PhpStructure(
            hasInterfaceOrAbstract: $visitor->hasInterface || $visitor->hasAbstractClass,
            concreteClassCount: $visitor->concreteClassCount,
            hasLargeIfElseChain: $visitor->maxIfElseBranches >= self::LARGE_IF_ELSE_THRESHOLD,
            contextDelegatesToAbstraction: $visitor->hasDelegation && ($visitor->hasInterface || $visitor->hasAbstractClass),
        );
    }
}

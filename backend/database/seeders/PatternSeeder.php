<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PatternSeeder extends Seeder
{
    public function run(): void
    {
        $patterns = [
            [
                'name' => 'strategy',
                'intent' => 'Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.',
                'when_to_use' => 'Use when you have many related classes that differ only in their behavior, or when you need different variants of an algorithm.',
                'structural_requirements' => json_encode([
                    'no_large_if_else_chain',
                    'has_interface_or_abstract',
                    'at_least_two_concrete_implementations',
                    'context_delegates_to_abstraction',
                ]),
                'example_solution' => "<?php\ninterface Strategy { public function execute(): string; }\nclass ConcreteA implements Strategy { public function execute(): string { return 'A'; } }\nclass ConcreteB implements Strategy { public function execute(): string { return 'B'; } }\nclass Context { public function __construct(private Strategy \$s) {} public function run(): string { return \$this->s->execute(); } }\n",
            ],
            [
                'name' => 'factory',
                'intent' => 'Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.',
                'when_to_use' => 'Use when you cannot anticipate the exact class of objects your code will work with, or when you want to provide a way for users to extend the internal components.',
                'structural_requirements' => json_encode(['extract_factory_from_constructor']),
                'example_solution' => "<?php\ninterface Product {}\nclass ConcreteProduct implements Product {}\nabstract class Creator { abstract public function factoryMethod(): Product; public function operation(): Product { return \$this->factoryMethod(); } }\nclass ConcreteCreator extends Creator { public function factoryMethod(): Product { return new ConcreteProduct(); } }\n",
            ],
            [
                'name' => 'polymorphism',
                'intent' => 'Replace conditional logic with polymorphic types and override behavior in subclasses.',
                'when_to_use' => 'Use when you have a switch or if/else that selects behavior based on type; move each branch into a separate class.',
                'structural_requirements' => json_encode(['replace_switch_with_polymorphism']),
                'example_solution' => "<?php\nabstract class Type { abstract public function describe(): string; }\nclass TypeA extends Type { public function describe(): string { return 'A'; } }\nclass TypeB extends Type { public function describe(): string { return 'B'; } }\n",
            ],
            [
                'name' => 'specification',
                'intent' => 'Encapsulate business rules that can be combined using boolean logic (and, or, not) for reusable filtering and validation.',
                'when_to_use' => 'Use when you have complex filtering logic or business rules that should be composable and testable in isolation.',
                'structural_requirements' => json_encode(['introduce_specification_for_filtering']),
                'example_solution' => "<?php\ninterface Specification { public function isSatisfiedBy(\$candidate): bool; }\nclass AndSpec implements Specification { public function __construct(private Specification \$a, private Specification \$b) {} public function isSatisfiedBy(\$c): bool { return \$this->a->isSatisfiedBy(\$c) && \$this->b->isSatisfiedBy(\$c); } }\n",
            ],
            [
                'name' => 'template_method',
                'intent' => 'Define the skeleton of an algorithm in a base class, deferring some steps to subclasses. Subclasses override specific steps without changing the algorithm structure.',
                'when_to_use' => 'Use when you have several classes with similar algorithms that differ only in certain steps.',
                'structural_requirements' => json_encode(['template_method_refactor']),
                'example_solution' => "<?php\nabstract class AbstractClass { public function templateMethod(): string { return \$this->primitiveOperation1() . \$this->primitiveOperation2(); } abstract protected function primitiveOperation1(): string; abstract protected function primitiveOperation2(): string; }\nclass ConcreteClass extends AbstractClass { protected function primitiveOperation1(): string { return '1'; } protected function primitiveOperation2(): string { return '2'; } }\n",
            ],
        ];

        foreach ($patterns as $p) {
            $p['created_at'] = $p['updated_at'] = now();
            DB::table('patterns')->insert($p);
        }
    }
}

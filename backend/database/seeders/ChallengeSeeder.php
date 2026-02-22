<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChallengeSeeder extends Seeder
{
    public function run(): void
    {
        $patternIds = DB::table('patterns')->pluck('id', 'name');

        $challenges = [
            [
                'title' => 'Replace if/else with Strategy',
                'language' => 'php',
                'messy_code' => "<?php\nfunction getShippingCost(string \$type, float \$weight): float {\n    if (\$type === 'standard') {\n        return \$weight * 1.5;\n    } elseif (\$type === 'express') {\n        return \$weight * 3.0;\n    } elseif (\$type === 'overnight') {\n        return \$weight * 5.0;\n    }\n    return 0;\n}\n",
                'pattern_id' => $patternIds['strategy'],
                'difficulty' => 'beginner',
            ],
            [
                'title' => 'Extract Factory from constructor logic',
                'language' => 'php',
                'messy_code' => "<?php\nclass OrderProcessor {\n    public function __construct() {\n        \$this->logger = new FileLogger();\n        \$this->validator = new OrderValidator();\n    }\n}\n",
                'pattern_id' => $patternIds['factory'],
                'difficulty' => 'beginner',
            ],
            [
                'title' => 'Replace switch with Polymorphism',
                'language' => 'php',
                'messy_code' => "<?php\nfunction formatOutput(string \$type, \$data): string {\n    switch (\$type) {\n        case 'json': return json_encode(\$data);\n        case 'xml': return toXml(\$data);\n        case 'csv': return toCsv(\$data);\n        default: return (string) \$data;\n    }\n}\n",
                'pattern_id' => $patternIds['polymorphism'],
                'difficulty' => 'beginner',
            ],
            [
                'title' => 'Introduce Specification for filtering',
                'language' => 'php',
                'messy_code' => "<?php\nfunction filterActiveAndPremium(array \$users): array {\n    return array_filter(\$users, fn(\$u) => \$u->isActive() && \$u->isPremium());\n}\n",
                'pattern_id' => $patternIds['specification'],
                'difficulty' => 'intermediate',
            ],
            [
                'title' => 'Template Method refactor',
                'language' => 'php',
                'messy_code' => "<?php\nfunction processData(\$data) {\n    \$data = validate(\$data);\n    \$data = transform(\$data);\n    save(\$data);\n}\nfunction processOther(\$data) {\n    \$data = validate(\$data);\n    \$data = transformOther(\$data);\n    save(\$data);\n}\n",
                'pattern_id' => $patternIds['template_method'],
                'difficulty' => 'intermediate',
            ],
        ];

        foreach ($challenges as $c) {
            $c['created_at'] = $c['updated_at'] = now();
            DB::table('challenges')->insert($c);
        }
    }
}

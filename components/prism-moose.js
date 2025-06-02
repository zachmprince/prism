Prism.languages.moose = {
    'comment': /(^|[^\\])#.*/,
    'moose-parsed-syntax': {
        pattern: /(?<=[\[\/])(?:\w+\<\<\<.*?\>\>\>)(?=[\/\]])/,
        alias: 'keyword',
        lookbehind: true
    },
    'moose-syntax': {
        pattern: /(?<=[\[\/])(?:Adaptivity|Bounds|Mesh|MeshDivisions|MeshGenerators|MeshModifiers|Kernels|AuxKernels|ScalarKernels|AuxScalarKernels|Variables|AuxVariables|Materials|FunctorMaterials|Postprocessors|BCs|ICs|Executioner|Executors|Outputs|Problem|Physics|Debug|Preconditioning|UserObjects|Functions|GlobalParams|VectorPostprocessors|Dampers|DiracKernels|DGKernels|Constraints|NodalNormals|CoupledProblems|DeprecatedBlock|MultiApps|Transfers|InterfaceKernels|NodalKernels|Controls|Modules|Positions|Times|FluidProperties|SolidProperties|Closures|Components|ControlLogic|FVBCs|FVKernels|FVInterfaceKernels|Distributions|Likelihood|Samplers|Surrogates|VariableMappings|Reporters|OptimizationReporter|Splits|RayBCs|RayKernels|imeStepper|TimeSteppers|TimePeriods|Quadrature|Predictor|Indicators|Markers|Periodic|InitialCondition|MortarInterfaces|Partitioner)(?=[\]\/])/,
        alias: 'keyword',
        lookbehind: true
    },
    'moose-object': {
        pattern: /((?:^|\s)\[|\/)\w+(?=\]$)/m,
        alias: 'class-name',
        lookbehind: true
    },
    'moose-parsed-class': {
        pattern: /(?<=\btype\s*=\s*)(?:\w+\<\<\<.*?\>\>\>)/,
        alias: 'function',
    },
    'moose-class': {
        pattern: /(?<=\btype\s*=\s*)[^\s]+\b/,
        alias: 'function',
    },
    'moose-type': {
        pattern: /\b(type)(?=\s*=\s*)/,
        alias: 'keyword',
    },
    'moose-parsed-parameter': {
        pattern: /(?:\b\w+\<\<\<.*?\>\>\>)(?=\s*=\s*)/,
    },
    'moose-order': {
        pattern: /(?<=\border.*=\s*)CONSTANT|FIRST|SECOND|THIRD|FOURTH|FIFTH|SIXTH|SEVENTH|EIGHTH|NINTH/i,
        alias: 'constant',
    },
    'moose-family': {
        pattern: /(?<=\bfamily.*?=\s*)LAGRANGE_VEC|LAGRANGE|MONOMIAL_VEC|MONOMIAL|HERMITE|SCALAR|SIDE_HIERARCHIC|HIERARCHIC|CLOUGH|XYZ|SZABAB|BERNSTEIN|RATIONAL_BERNSTEIN|L2_LAGRANGE|L2_HIERARCHIC/i,
        alias: 'constant',
    },
    'moose-elem-type': {
        pattern: /(\belem_type.*=\s*)EDGE|EDGE2|EDGE3|EDGE4|QUAD|QUAD4|QUAD8|QUAD9|TRI3|TRI6|HEX8|HEX20|HEX27|HEX|TET4|TET10|PRISM6|PRISM15|PRISM18|PYRAMID5|PYRAMID13|PYRAMID14/,
        alias: 'constant',
    },
    'moose-output-on': {
        pattern: /\b(output_on.*=\s*['"])(?:none|initial|linear|nonlinear|timestep_end|timestep_begin|final|failed|custom)(?:\s+(?:none|initial|linear|nonlinear|timestep_end|timestep_begin|final|failed|custom))*(?=['"])/i,
        alias: 'constant',
    },
    'moose-execute-on': {
        pattern: /\b(execute_on.*=\s*['"])(?:none|initial|linear|nonlinear|timestep_end|timestep_begin|multiapp_fixed_point_begin|multiapp_fixed_point_begin|final|custom|always|forward|adjoint)(?:\s+(?:none|initial|linear|nonlinear|timestep_end|timestep_begin|multiapp_fixed_point_begin|multiapp_fixed_point_begin|final|custom|always|forward|adjoint))*(?=['"])/i,
        alias: 'constant',
    },
    'moose-parameter': {
        pattern: /(?:\b\w+)(?=\s*=\s*)/,
    },
    'builtin': /\b(?:abs|acos|acosh|arg|asin|atan|atan2|atanh|cbrt|ceil|conj|cos|cosh|cot|csc|exp|exp2|floor|hypot|if|imag|int|log|log10|log2|max|min|polar|pow|real|sec|sin|sinh|sqrt|tan|tanh|trunc|plog|fparse|units)\b/,
	'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
	'boolean': /\b(?:false|true)\b/i,
    'operator': /[\+\*\/\^%\-]/,
	'punctuation': /['"]/,
    'property': /\w+\b(?!\s*=)/
}

## TSC Setup

    - To fix error : TS2304: Cannot find name 'module'.
        $ npm install @types/node --save-dev

        modify tsconfig.json
        "typeRoots": [
        "node_modules/@types"
        ],

    - No need typing install
        modify tsconfig.json
        "lib": [
            "es2016",
            "dom"
        ]
# eslint-type-1

![Check](https://github.com/Tarik02/eslint-type-1/actions/workflows/check.yml/badge.svg)
![Release](https://github.com/Tarik02/eslint-type-1/actions/workflows/release.yml/badge.svg)

## Core package

[![npm version](https://badge.fury.io/js/@tarik02%2Feslint-type-1.svg)](https://badge.fury.io/js/@tarik02%2Feslint-type-1)

```bash
$ yarn add --dev eslint @tarik02/eslint-type-1
```

.eslintrc:
```json
{
    "extends": [
        "@tarik02/eslint-type-1"
    ],
    "env": {
        "browser": true
    }
}
```

## Presets


### Import

[![npm version](https://badge.fury.io/js/@tarik02%2Feslint-type-1-import.svg)](https://badge.fury.io/js/@tarik02%2Feslint-type-1-import)

```bash
$ yarn add @tarik02/eslint-type-1-import
```

.eslintrc:
```json
{
    "extends": [
        "@tarik02/eslint-type-1-import"
    ],
    "settings": {
        "import/resolver": {
            "typescript": {
                "project": "./tsconfig.json"
            }
        }
    },
    "rules": {
        "import/order": [
            "error",
            {
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                },
                "newlines-between": "always",
                "groups": [
                    [
                        "builtin",
                        "external"
                    ],
                    "internal",
                    "parent",
                    [
                        "sibling",
                        "index"
                    ]
                ],
                "pathGroups": [
                    {
                        "pattern": "@/**",
                        "group": "internal"
                    }
                ],
                "pathGroupsExcludedImportTypes": [
                    "builtin"
                ]
            }
        ]
    }
}
```


### React

[![npm version](https://badge.fury.io/js/@tarik02%2Feslint-type-1-react.svg)](https://badge.fury.io/js/@tarik02%2Feslint-type-1-react)

```bash
$ yarn add @tarik02/eslint-type-1-react
```

.eslintrc:
```json
{
    "extends": [
        "@tarik02/eslint-type-1-react"
    ],
    "settings": {
        "react": {
            "version": "18"
        }
    }
}
```


## License

The project is released under the MIT license. Read the [license](https://github.com/Tarik02/js-php-imports/blob/master/LICENSE) for more information.

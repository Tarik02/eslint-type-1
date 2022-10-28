# eslint-type-1

![Check](https://github.com/Tarik02/eslint-type-1/actions/workflows/check.yml/badge.svg)
![Publish to NPM](https://github.com/Tarik02/eslint-type-1/actions/workflows/publish-to-npm.yml/badge.svg)
[![npm version](https://badge.fury.io/js/eslint-type-1.svg)](https://badge.fury.io/js/eslint-type-1)

## Installation

```bash
$ yarn add --dev eslint @tarik02/eslint-type-1
```

## Preset config

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

```bash
$ yarn add @tarik02/eslint-type-1-import
```

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

```bash
$ yarn add @tarik02/eslint-type-1-react
```

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

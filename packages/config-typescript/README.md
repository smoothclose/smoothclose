# `tsconfig`

These are base shared `tsconfig.json`s from which all other `tsconfig.json`'s inherit from.

## Usage

Add `@smoothclose/typsecript-config` as a devDependency in the workspaces package.json

```json
{
	"devDependencies": {
		"@smoothclose/typescript-config": "workspace:*"
	}
}
```

Extend the config you want to use in the `tsconfig.json` file in your workspace

Add `@smoothclose/typsecript-config` as a devDependency in the workspaces package.json

```json
{
	"extends": "@smoothclose/typescript-config/base.json",
	"include": ["**/*.ts"],
	"exclude": ["node_modules"]
}
```

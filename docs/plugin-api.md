> Introduction

# Plugin API

The `presetWarp` export provided via `@warp-ds/uno` supports the following options.

```ts
{
  development?: boolean
  usePreflight?: boolean
  externalizeClasses?: boolean
  externalClasses?: string[]
}
```

## development

This is the only option most users should need to set. This will automatically control when preflights are enabled, and when classes are 'externalized' to prefer the Eik version.

## usePreflight

Force preflights to be included in the output.

## externalizeClasses

Force classes in `externalClasses` to be removed from output.

## externalClasses

A list of CSS classes that should be removed from output.

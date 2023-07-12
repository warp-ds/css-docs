> Introduction

# Plugin API

The `presetWarp` export provided via `@warp-ds/uno` supports the following options.

```ts
{
  development?: boolean
  skipResets?: boolean
  omitComponentClasses?: boolean
  usePixels?: boolean
  externalizeClasses?: boolean
  externalClasses?: string[]
}
```

## development

If set to `true`, forces preflights(resets.css + transform resets) to be excluded, and no external classes will be processed.

### skipResets

If `true`, forces resets to be excluded from preflights.

### omitComponentClasses

If `true` forces component classes to be excluded from the process. Styling for the classes already used in component classes won't be generated.

### usePixels

For use on sites that are incompatible with root REM/`font-size` changes.

## externalizeClasses

Force classes in `externalClasses` to be removed from output.

## externalClasses

A list of CSS classes that should be removed from output.

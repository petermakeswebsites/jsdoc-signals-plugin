# JSDoc Signals Plugin

Signals are not types and are difficult for IDEs to track at development time. They follow a similar logic to why it's difficult if not impossible to track if a function will `throw`.

JSDoc offers annotations for those who want to know whether a function throws or not. And therefore a similar solution can be made for signals. For this reason, A JSDoc plugin that adds the `@signal` tag, synonymous with `@reactive` for tracking dependencies.

## Installation

```bash
npm install jsdoc-signals-plugin
```

## Usage

Add the plugin to your JSDoc configuration:

```json
{
    "plugins": ["node_modules/jsdoc-signals-plugin/index.js"]
}
```

### `@signal` Tag

The `@signal` tag can be used to indicate that a function, variable, or property is reactive. It is treated as synonymous with `@reactive`, meaning that the item will be tracked as a dependency inside signal effect contexts.

Example:

```javascript
/**
 * This is a reactive function.
 * @reactive
 */
function reactiveFunction() {
    // Function code here
}
```
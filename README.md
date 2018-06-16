# Thrift Binary

Ready to use thrift binaries, for all platforms.
No build needed.

Versioning of the package is consistent with the Thrift Releases.

## Usage

`npm i thrift-binary@0.9.3` (for Thrift v0.9.3)

Now use in your `package.json` files. For eg.

```
{
    scripts: {
        "build": "thrift-binary -I ./lib -out ./out -gen js:node"
    }
}
```

CLI can be used with:

`./node_modules/.bin/thrift-binary <options>`

Or install it globally with:

`npm i -g thrift-binary`

And use:

`thrift-binary <options>`


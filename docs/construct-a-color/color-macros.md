# Macros use

You also could construct a color by use `color!` macro.

Currently supported color spaces:

- HEX
- RGB / RGBA
- HSL
- HSV

More color spaces supported is coming soon!

> ⚠️ Warning: This macro will panic when the params parsed error.

#### Examples

```rust
use color_art::color;

let color = color!(#1890ff);
color.hex() // "#1890ff"

let color = color!(rgb(255, 255, 0));
color.rgb() // "rgb(255, 255, 0)"

let color = color!(rgba(255, 255, 0, 0.5));
color.rgba() // "rgba(255, 255, 0, 0.5)"

let color = color!(rgb, 255, 255, 0);
color.rgb() // "rgb(255, 255, 0)"

let color = color!(hsl, 60.0, 1.0, 0.5);
color.hsl() // "hsl(60, 100%, 50%)"

let color = color!(hsv, 60.0, 1.0, 1.0);
color.hsv() // "hsv(60, 100%, 100%)"
```

# Construct from string

You can use the `from_str` method to construct a color from a string.

## API

#### Function signature

```rust
impl Color {
  fn from_str(s: &str) -> Result<Self>
}
```

#### Parameters

- `s`: `&str` - The string to parse.

#### Return value

- `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

## Supported color spaces

### RGB or RGBA color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("rgb(255, 255, 0)").unwrap();
let color = Color::from_str("rgba(255, 255, 0, 0.5)").unwrap();
```

### HEX string

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("#ff0").unwrap();
let color = Color::from_str("#ffff00").unwrap();
```

### HSL or HSLA color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("hsl(60, 100%, 50%)").unwrap();
let color = Color::from_str("hsla(60, 100%, 50%, 0.5)").unwrap();
```

### HSV color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("hsv(60, 100%, 100%)").unwrap();
```

### HSI color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("hsi(60, 100%, 66.67%)").unwrap();
```

### HWB color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("hwb(60, 0%, 0%)").unwrap();
```

### CMYK color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("cmyk(100%, 0%, 100%, 0%)").unwrap();
```

### XYZ color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("xyz(0.932231, 0.975339, 0.502949)").unwrap();
```

### YUV color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("yuv(0.886, -0.4359, 0.1)").unwrap();
```

### YCbCr color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("YCbCr(225.93, 0.5755, 148.7269)").unwrap();
```

### CIE-LAB color space

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("lab(97.14, -21.55, 94.48)").unwrap();
```

### Named color

Currently supported color names are:

- English color names from [X11_color_names](https://en.wikipedia.org/wiki/X11_color_names)
- [中国传统色](https://github.com/jufjzq/Chinese-Traditional-Colors/blob/master/src/assets/colors.json) (Chinese traditional colors)

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("yellow").unwrap();
let color = Color::from_str("水绿").unwrap();
```

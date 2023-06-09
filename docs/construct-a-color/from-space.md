# Construct from color spaces

You can use the `from_<color_space>` method to construct a color from a color space.

Currently supported color spaces:

- [RGB](#from-rgb-color-space) or [RGBA](#from-rgba-color-space)
- [HEX](#from-hex-string)
- [HSL](#from-hsl-color-space)
- [HSV](#from-hsv-color-space)
- [CMYK](#from-cmyk-color-space)

More color spaces supported is incoming!

## Color Spaces

### from rgb color space

You could use `from_rgb` to construct a color from `rgb`.

#### Function signature

```rust
impl Color {
    pub fn from_rgb<T>(r: T, g: T, b: T) -> Result<Self>
    where
        T: Into<f64>,
}
```

#### Parameters

* `r`: Red value (0-255)
* `g`: Green value (0-255)
* `b`: Blue value (0-255)

#### Return value

* `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

#### Examples

```rust
use color_art::Color;

let color = Color::from_rgb(255, 255, 0).unwrap();
```

### from rgba color space

You could use `from_rgba` to construct a color from `rgba`.

#### Function signature

```rust
impl Color {
    pub fn from_rgba<T>(r: T, g: T, b: T, a: f64) -> Result<Self>
    where
        T: Into<f64>,
}
```

#### Parameters

* `r`: Red value (0-255)
* `g`: Green value (0-255)
* `b`: Blue value (0-255)
* `a`: Alpha value (0-1)

#### Return value

* `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

#### Examples

```rust
use color_art::Color;

let color = Color::from_rgba(255, 255, 0, 0.5).unwrap();
```

### from hex string

You could use `from_hex` to construct a color from hex string.

#### Function signature

```rust
impl Color {
    pub fn from_hex(hex_str: &str) -> Result<Self>
}
```

#### Parameters

* `hex`: Hex string. (e.g. `#ff0`, `#ffff00`)

#### Return value

* `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

#### Examples

```rust
use color_art::Color;

let color = Color::from_hex("#ff0").unwrap();
```

### from hsl color space

You could use `from_hsl` to construct a color from `hsl`.

#### Function signature

```rust
impl Color {
    pub fn from_hsl(h: f64, s: f64, l: f64) -> Result<Self>
}
```

#### Parameters

* `h`: Hue value (0-360)
* `s`: Saturation value (0-1)
* `l`: Lightness value (0-1)

#### Return value

* `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

#### Examples

```rust
use color_art::Color;

let color = Color::from_hsl(60.0, 1.0, 0.5).unwrap();
```

### from hsv color space

You could use `from_hsv` to construct a color from `hsv`.

#### Function signature

```rust
impl Color {
    pub fn from_hsv(h: f64, s: f64, v: f64) -> Result<Self>
}
```

#### Parameters

* `h`: Hue value (0-360)
* `s`: Saturation value (0-1)
* `v`: Value value (0-1)

#### Return value

* `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

#### Examples

```rust
use color_art::Color;

let color = Color::from_hsv(60.0, 1.0, 1.0).unwrap();
```

### from cmyk color space

You could use `from_cmyk` to construct a color from `cmyk`.

#### Function signature

```rust
impl Color {
    pub fn from_cmyk(c: f64, m: f64, y: f64, k: f64) -> Result<Self>
}
```

#### Parameters

* `c`: Cyan value (0-1)
* `m`: Magenta value (0-1)
* `y`: Yellow value (0-1)
* `k`: Key value (0-1)

#### Return value

* `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

#### Examples

```rust
use color_art::Color;

let color = Color::from_cmyk(0.0, 0.0, 1.0, 0.0).unwrap();
```

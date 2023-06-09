<script setup>
import ColorTrans from '../../components/ColorTrans.vue'
</script>

# Color Operations

Here are some color operation functions.

## Color Operation API

### darken

Decrease the lightness of a color in the HSL color space by an absolute amount.

#### Function signature

```rust
impl Color {
  pub fn darken(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The amount to decrease the lightness by. Must be between 0.0 and 1.0.

#### Examples

```rust
use color_art::color;

let color = color!(#ffff00);
let color = color.darken(0.2);
color.hex(); // "#990"
```

<ColorTrans input="#ffff00" output="#990" />

### lighten

Increase the lightness of a color in the HSL color space by an absolute amount.

#### Function signature

```rust
impl Color {
  pub fn lighten(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The amount to increase the lightness by. Must be between 0.0 and 1.0.

#### Examples

```rust
use color_art::color;

let color = color!(#ffff00);
let color = color.lighten(0.2);
color.hex(); // "#ff6"
```

<ColorTrans input="#ffff00" output="#ff6" />

### saturate

Increase the saturation of a color in the HSL color space by an absolute amount.

#### Function signature

```rust
impl Color {
  pub fn saturate(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The amount to increase the saturation by. Must be between 0.0 and 1.0.

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("hsl(60, 80%, 50%)").unwrap();
let color = color.saturate(0.2);
color.hsl(); // "hsl(60, 100%, 50%)"
```

<ColorTrans input="hsl(60, 80%, 50%)" output="hsl(60, 100%, 50%)" />

### desaturate

Decrease the saturation of a color in the HSL color space by an absolute amount.

#### Function signature

```rust
impl Color {
  pub fn desaturate(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The amount to decrease the saturation by. Must be between 0.0 and 1.0.

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("hsl(60, 80%, 50%)").unwrap();
let color = color.desaturate(0.2);
color.hsl(); // "hsl(60, 60%, 50%)"
```

<ColorTrans input="hsl(60, 80%, 50%)" output="hsl(60, 60%, 50%)" />

### greyscale

Remove all saturation from a color in the HSL color space.

#### Function signature

```rust
impl Color {
  pub fn greyscale(&self) -> Self
}
```

#### Examples

```rust
use color_art::color;

let color = color!(#80e619);
let color = color.greyscale();
color.hex(); // "#808080"
```

<ColorTrans input="#80e619" output="#808080" />

### fade

Set the absolute opacity of a color.

#### Function signature

```rust
impl Color {
  pub fn fade(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The opacity to set. Must be between 0 and 1.

#### Examples

```rust
use color_art::color;

let color = color!(rgba(255, 0, 0, 1.0));
let faded_color = color.fade(0.5);
faded_color.rgba(); // "rgba(255, 0, 0, 0.5)"
```

<ColorTrans input="rgba(255, 0, 0, 1.0)" output="rgba(255, 0, 0, 0.5)" />

### fade_in

Decrease the transparency (or increase the opacity) of a color, making it more opaque.

#### Function signature

```rust
impl Color {
  pub fn fade_in(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The amount to fade in. Must be between 0 and 1.

#### Examples

```rust
use color_art::color;

let color = color!(rgba(255, 0, 0, 0.8));
let faded_color = color.fade_in(0.1);
faded_color.rgba(); // "rgba(255, 0, 0, 0.9)"
```

<ColorTrans input="rgba(255, 0, 0, 0.8)" output="rgba(255, 0, 0, 0.9)" />

### fade_out

Increase the transparency (or decrease the opacity) of a color, making it less opaque.

#### Function signature

```rust
impl Color {
  pub fn fade_out(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The amount to fade out. Must be between 0 and 1.

#### Examples

```rust
use color_art::color;

let color = color!(rgba(255, 0, 0, 0.8));
let faded_color = color.fade_out(0.2);
faded_color.rgba(); // "rgba(255, 0, 0, 0.6)"
```

<ColorTrans input="rgba(255, 0, 0, 0.8)" output="rgba(255, 0, 0, 0.6)" />

### spin

Rotate the hue angle of a color in either direction.

#### Function signature

```rust
impl Color {
  pub fn spin(&self, angle: f64) -> Self
}
```

#### Parameters

* `angle` - The angle to rotate the hue by. Positive values rotate clockwise, negative values rotate counter-clockwise.

#### Examples

```rust
use color_art::Color;
use std::str::FromStr;

let color = Color::from_str("hsl(60, 80%, 50%)").unwrap();
let spun_color = color.spin(80.0);
spun_color.hsl(); // "hsl(140, 80%, 50%)"
```

<ColorTrans input="hsl(60, 80%, 50%)" output="hsl(140, 80%, 50%)" />

### mix_with

Mix a color with another color by a given amount.

#### Function signature

```rust
impl Color {
  pub fn mix_with(&self, new_color: &Color, weight: f64) -> Self
}
```

#### Parameters

* `new_color` - The color to mix with.
* `weight` - The weight of the new color to mix with. 0.0 is all the original color, 1.0 is all the new color.

#### Examples

```rust
use color_art::color;

let color1 = color!(#ff0000);
let color2 = color!(#0000ff);
let color3 = color1.mix_with(&color2, 0.5);
color3.hex(); // "#800080"
```

<ColorTrans :input="['#ff0000', '#0000ff']" output="#800080" />

### tint

Mix color with white in variable proportion.

#### Function signature

```rust
impl Color {
  pub fn tint(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The amount of white to mix in. 0.0 is no white, 1.0 is all white.

#### Examples

```rust
use color_art::color;

let color = color!(#ff00ff);
let color = color.tint(0.5);
color.hex(); // "#ff80ff"
```

<ColorTrans input="#ff00ff" output="#ff80ff" />

### shade

Mix color with black in variable proportion.

#### Function signature

```rust
impl Color {
  pub fn shade(&self, amount: f64) -> Self
}
```

#### Parameters

* `amount` - The amount of black to mix in. 0.0 is no black, 1.0 is all black.

#### Examples

```rust
use color_art::color;

let color = color!(#ff00ff);
let color = color.shade(0.5);
color.hex(); // "#800080"
```

<ColorTrans input="#ff00ff" output="#800080" />

## References

* less [color-operations](https://lesscss.org/functions/#color-operations).
* sass [modules color](https://sass-lang.com/documentation/modules/color).

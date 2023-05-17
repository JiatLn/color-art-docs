# Color Blending Functions

These operations are similar (though not necessarily identical) to the blend modes found in image editors like Photoshop, Fireworks, or GIMP, so you can use them to make your CSS colors match your images.

## Color Blendings

Blends two colors using RGB channel-wise blend functions.

#### Supported blend modes

* [Normal](#normal)
* [Multiply](#multiply)
* [Darken](#darken)
* [Lighten](#lighten)
* [Screen](#screen)
* [Overlay](#overlay)
* [ColorBurn](#colorburn)
* [ColorDodge](#colordodge)
* [HardLight](#hardlight)
* [SoftLight](#softlight)
* [Difference](#difference)
* [Exclusion](#exclusion)

The blend mode formulas taken from [blending](https://www.w3.org/TR/compositing-1/#blending).

#### Function signature

```rust
pub fn blend(
  backdrop_color: &Color, 
  source_color: &Color, 
  mode: BlendMode
) -> Color
```

#### Parameters

* `backdrop_color` - The color of the backdrop.
* `source_color` - The color of the source.
* `mode` - The blend mode to use. See [BlendMode](#blend-mode-introduction) for more information.

#### Examples

```rust
use color_art::{color, BlendMode, blend};

let color1 = color!(#4cbbfc);
let color2 = color!(#eeee22);

let blended_color = blend(&color1, &color2, BlendMode::Overlay);
blended_color.hex() // "#8ef6fa"
```

## Blend Mode Introduction

The blend mode defines the formula that must be used to mix the colors with the backdrop.

### Normal 

> This is the default attribute which specifies no blending. The blending formula simply selects the source color.

### Multiply 

> The source color is multiplied by the destination color and replaces the destination. 
>
> The resultant color is always at least as dark as either the source or destination color. Multiplying any color with black results in black. Multiplying any color with white preserves the original color.

### Darken 

> Selects the darker of the backdrop and source colors.
>
> The backdrop is replaced with the source where the source is darker; otherwise, it is left unchanged.

### Lighten 

> Selects the lighter of the backdrop and source colors.
>
> The backdrop is replaced with the source where the source is lighter; otherwise, it is left unchanged.

### Screen 

> Multiplies the complements of the backdrop and source color values, then complements the result.
>
> The result color is always at least as light as either of the two constituent colors. Screening any color with white produces white; screening with black leaves the original color unchanged. The effect is similar to projecting multiple photographic slides simultaneously onto a single screen.

### Overlay 

> Multiplies or screens the colors, depending on the backdrop color value. Source colors overlay the backdrop while preserving its highlights and shadows.
>
> The backdrop color is not replaced but is mixed with the source color to reflect the lightness or darkness of the backdrop.

### ColorBurn 

> Darkens the backdrop color to reflect the source color. Painting with white produces no change.

### ColorDodge 

> Brightens the backdrop color to reflect the source color. Painting with black produces no changes.

### HardLight 

> Multiplies or screens the colors, depending on the source color value. The effect is similar to shining a harsh spotlight on the backdrop.

### SoftLight 

> Darkens or lightens the colors, depending on the source color value. The effect is similar to shining a diffused spotlight on the backdrop.

### Difference 

> Subtracts the darker of the two constituent colors from the lighter color.
>
> Painting with white inverts the backdrop color; painting with black produces no change.

### Exclusion 

> Produces an effect similar to that of the Difference mode but lower in contrast. Painting with white inverts the backdrop color; painting with black produces no change.

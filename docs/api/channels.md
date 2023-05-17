# Color Channels

Extracts the color channels.

## red

Extracts the red channel of color as a number between 0 and 255.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.red(); // 171
```

## green

Extracts the green channel of color as a number between 0 and 255.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.green(); // 205
```

## blue

Extracts the blue channel of color as a number between 0 and 255.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.blue(); // 239
```

## alpha

Extracts the alpha channel of color as a number between 0.0 and 1.0.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.alpha(); // 1.0
```

## hue

Extracts the hue channel of color as a number between 0.0 and 360.0.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.hue(); // 210.0
```

## saturation

Extracts the HSL saturation of color as a number between 0.0 and 1.0.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.saturation(); // 0.68
```

## lightness

Extracts the HSL lightness of color as a number between 0.0 and 1.0.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.lightness(); // 0.8039
```

## whiteness

Extracts the HWB whiteness of color as a number between 0.0 and 1.0.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.whiteness(); // 0.6706
```

## blackness

Extracts the HWB blackness of color as a number between 0.0 and 1.0.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.blackness(); // 0.0627
```

## hsv_hue

Extracts the hue channel of color in the HSV color space.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.hsv_hue(); // 210.0
```

## hsv_saturation

Extracts the saturation channel of color in the HSV color space.
#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.hsv_saturation(); // 0.2845
```

## hsv_value

Extracts the value channel of color in the HSV color space.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.hsv_value(); // 0.9373
```
## luma

Calculates the [luma](http://en.wikipedia.org/wiki/Luma_%28video%29) (perceptual brightness) of color.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.luma(); // 0.59
```

## luminance

Calculates the value of the luma without gamma correction.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.luminance(); // 0.79
```

## gray

Calculates the [gray](http://en.wikipedia.org/wiki/Grayscale) value of color.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);
color.gray(); // 198.71
```

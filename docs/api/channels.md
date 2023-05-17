# Color Channels

You can use the `red`, `green`, `blue`, `alpha`, `hue`, `saturation`, `lightness`, `whiteness`, `blackness`, `hsv_hue`, `hsv_saturation`, `hsv_value`, `luma`, `luminance`, `gray` method to extract the color channel.

#### Examples

```rust
use color_art::color;

let color = color!(#abcdef);

color.red(); // 171
color.green(); // 205
color.blue(); // 239
color.alpha(); // 1.0

color.hue(); // 210.0
color.saturation(); // 0.68
color.lightness(); // 0.8039

color.whiteness(); // 0.6706
color.blackness(); // 0.0627

color.hsv_hue(); // 210.0
color.hsv_saturation(); // 0.2845
color.hsv_value(); // 0.9373

color.luma(); // 0.59
color.luminance(); // 0.79

color.gray(); // 198.71
```
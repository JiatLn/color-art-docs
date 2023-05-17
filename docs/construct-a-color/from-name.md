# Construct from named color

You can use the `from_name` method to construct a color from a name.

Currently supported color names are:

- English color names from [X11_color_names](https://en.wikipedia.org/wiki/X11_color_names)
- [中国传统色](https://github.com/jufjzq/Chinese-Traditional-Colors/blob/master/src/assets/colors.json) (Chinese traditional colors)

#### Function signature

```rust
impl Color {
  pub fn from_name(name: &str) -> Result<Self>
}
```

#### Parameters

* `name`: The name of color.

#### Return value

* `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

#### Examples

```rust
use color_art::Color;

let color = Color::from_name("yellow").unwrap();
let color = Color::from_name("水绿").unwrap();
```

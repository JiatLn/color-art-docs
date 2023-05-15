# Construct from number

You can use the `from_num` method to construct a color from a number.

Returns the numeric representation of the hexadecimal color.

#### Function signature

```rust
pub fn from_num(num: u32) -> Result<Self>
```

#### Parameters

* `num`: Number. The number must be in the range of `0..=0xffffff`.

#### Return value

* `Result<Self>` - A `Result` containing the parsed color if successful, or an error if not.

#### Examples

```rust
use color_art::Color;

let color = Color::from_num(16776960).unwrap();
let color = Color::from_num(0xffff00).unwrap();
```

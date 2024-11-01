
# solid-fa6-pro
Font Awesome 6.6 Pro components for solid-js

## Objective
This package aims to provide a customizable component for each icon in Font Awesome 6.6 Pro for free, but with some peculiarities:
- **Non global**: There are no global clas1s like "fad", "fa-circle-xmark", etc...
- **Separate fonts**: Each icon has its own specific font
- **Completely tree shakable**: You can import each icon separately, in fact you actually can't do otherwise since there are A LOT of icons
- **TypeScript package**: The package is not compiled, it ships directly in TypeScript and SCSS

## Usage
To use an icon simply import it as follows
```tsx
//                                     ↓ Category
import CircleXmark from "solid-fa6-pro/duotone/circle-xmark";
//                                             ↑ Name

function CancelButton() {
    return <>
        <button style={{ display: "flex", "justify-content": "center", "align-items": "center" }}>
            <CircleXmark fill="red" />&nbsp;Cancel
        </button>
    </>
}
```

## Styles
The library also provides a couple of style sheets, each containing some classes.
> Each class can also be applied to non-icons except [`generic.reverse`](#generic-reverse)

### `anim`
Style sheet that contains animations
- <span id="anim-beat">`beat`</span> (**fa-beat**): Makes the element increase and decrease in size
- <span id="anim-fade">`fade`</span> (**fa-fade**): Makes the element "blink"
- `beatFade` (**fa-beat-fade**): Sum of [`anim.beat`](#anim-beat) and [`anim.fade`](#anim-fade)
- `bounce` (**fa-bounce**): Makes the element do a little jump
- `flip` (**fa-flip**): Make the element do a 3D rotation around the Y axis
- `shake` (**fa-shake**): Makes the element rotate a bit back and forward multiple times
- <span id="anim-spin">`spin`</span> (**fa-spin**): Makes the element rotate
- `pulse` (**fa-pulse**, **fa-spin-pulse**): Does the same thing as [`anim.spin`](#anim-spin), but "lagging"

### `generic`
Style sheets that contains generic functionalities
- <span id="generic-reverse">`reverse`</span> (**fa-spin-reverse**): Sets [`IconOpts.animationDirection`](#iconopts) to "reverse"
- `rotateBy` (**fa-rotate-by**): Rotates the element by [`IconOpts.rotateAngle`](#iconopts)
- `rotate90` (**fa-rotate-90**): Rotates the element by 90°
- `rotate180` (**fa-rotate-180**): Rotates the element by 180°
- `rotate270` (**fa-rotate-270**): Rotates the element by 270°
- `flipHorizontal` (**fa-flip-horizontal**): Flips the element horizontally
- `flipVertical` (**fa-flip-vertical**): Flips the element vertically
- `flipBoth` (**fa-flip-both**): Flips the element horizontally and vertically

## Utility
Utilities for customization and primitives

### <span id="prefix">`CSS_VARIABLE_PREFIX`</span>
The prefix each customization CSS variable has

### <span id="iconopts">`IconOpts`</span>
Type that lists the available customization CSS variables

### `createIcon()`
Creates a new icon component based on the provided font

### `custom()`
Takes an [`IconOpts`](#iconopts) as argument and prefixes each of its properties with [`CSS_VARIABLE_PREFIX`](#prefix)
```tsx
import SpinnerThird from "solid-fa6-pro/duotone/spinner-third";
import { anim, custom } from "solid-fa6-pro";

function App() {
    return <>
        <SpinnerThird
            fill="#ffc107"
            class={anim.spin}
            style={custom({ animationDuration: "2s" })}
        />
    </>
}
```
The values of customization variables are inherited and can be combined with normal CSS
```tsx
// ...
<div style={{ color: "red", ...custom({ animationDuration: "2s" }) }}>
    Text
    <SpinnerThird fill="#ffc107" class={anim.spin} />
</div>
// ...
```

# font-class
Tree-shaker for Font Awesome 6.6 Pro.
> The [fonts](./src/font/) are taken from [here](https://weadown.com/res/font-awesome-pro/)

## Objective
This package aims to provide a customizable component for each icon in Font Awesome 6.6 Pro for free, but with some peculiarities:
- **Non global**: There are no global clas1s like "fad", "fa-circle-xmark", etc...
- **Single font**: Every icon is in one single font
- **Completely tree shakable**: The font contains only the specific icons you need
- **Typed**: TypeScript is aware of every icon shipped with this package and, for each icon, provides a property containing its CSS class
- **Non compiled**: The package is not compiled, it ships directly in TypeScript and SCSS

## <span id="tool">Usage</span>
Choose a file to store your configuration in and start importing your icons as follows
```tsx
import { createFont } from "font-class";

const {
  solid: { dollarSign },
  duotone: {
    circleXmark,
    faceAngry: doThisToMakeAliases
  }
} = createFont();
```
Once you've done that run the following command to do the tree-shaking
```sh
npx font-class path/to/your/file
```
The script will pass the right arguments to the `createFont()` call according to your configuration.
You can put this configuration wherever you want, just remember that the file will be formatted EACH time you run the command, so don't put inside of it things you don't want to be formatted
> Always remember to run the command again when you add/remove or even move one of the icons inside of that object destructuring

I suggest you to put your icons inside a `namespace` as follows
```tsx
namespace icon {
  export const {
    solid: { dollarSign },
    duotone: {
      circleXmark,
      faceAngry: doThisToMakeAliases
    }
  } = createFont();
}
```
To use it you just need style a `span` with the class of your desired icon
```tsx
return <span class={icon.dollarSign} />
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

### `createFont()`
Creates a new font and outputs the classes of its icons
> It also triggers the tree-shaker [tool](#tool)

### `custom()`
Takes an [`IconOpts`](#iconopts) as argument and prefixes each of its properties with [`CSS_VARIABLE_PREFIX`](#prefix)
```tsx
import { anim, custom } from "font-class";
import { icon } from "some/file";

function App() {
  return <>
    <span
      class={`${icon.spinnerThird} ${anim.spin}`}
      style={custom({ animationDuration: "2s" })}
    />
  </>
}
```
The values of customization variables are inherited and can be combined with normal CSS
```tsx
// ...
return <>
  <div style={{ color: "red", ...custom({ animationDuration: "2s" }) }}>
    Text
    <span class={`${icon.spinnerThird} ${anim.spin}`} />
  </div>
</>
// ...
```
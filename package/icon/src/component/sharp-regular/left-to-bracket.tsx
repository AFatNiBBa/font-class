
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=sharp-regular left-to-bracket}
 * @preview ![left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/left-to-bracket.svg)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 224l-48 0 0-48 0-28.1L227.9 256 336 364.1l0-28.1 0-48 48 0 80 0 0-64-80 0zm-190.1-1.9L320 96l16 0 48 0 0 32 0 16 0 32 48 0 32 0 48 0 0 48 0 64 0 48-48 0-32 0-48 0 0 32 0 16 0 32-48 0-16 0L193.9 289.9 160 256l33.9-33.9zM168 432l24 0 0 48-24 0L24 480 0 480l0-24L0 56 0 32l24 0 144 0 24 0 0 48-24 0L48 80l0 352 120 0z" />
    </Icon>
);

export default LeftToBracket;
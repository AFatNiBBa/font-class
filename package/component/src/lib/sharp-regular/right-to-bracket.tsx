
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-bracket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=sharp-regular right-to-bracket}
 * @preview ![right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/right-to-bracket.svg)
 */
const RightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 224l48 0 0-48 0-28.1L284.1 256 176 364.1l0-28.1 0-48-48 0-80 0 0-64 80 0zm190.1-1.9L192 96l-16 0-48 0 0 32 0 16 0 32-48 0-32 0L0 176l0 48 0 64 0 48 48 0 32 0 48 0 0 32 0 16 0 32 48 0 16 0L318.1 289.9 352 256l-33.9-33.9zM344 432l-24 0 0 48 24 0 144 0 24 0 0-24 0-400 0-24-24 0L344 32l-24 0 0 48 24 0 120 0 0 352-120 0z" />
    </Icon>
);

export default RightToBracket;
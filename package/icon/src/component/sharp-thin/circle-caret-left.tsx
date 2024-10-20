
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=sharp-thin circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM320 384l0-16 0-224 0-16-16 0-24 0L160 256 280 384l24 0 16 0zM286.9 144l17.1 0 0 224-17.1 0-105-112 105-112z" />
    </Icon>
);

export default CircleCaretLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=sharp-light circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM320 384l0-32 0-192 0-32-32 0-8 0L160 256 280 384l8 0 32 0zM203.9 256L288 166.3l0 179.5L203.9 256z" />
    </Icon>
);

export default CircleCaretLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=sharp-solid circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM272 384L144 256 272 128l32 0 0 256-32 0z" />
    </Icon>
);

export default CircleCaretLeft;
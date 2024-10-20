
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=sharp-regular circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM272 384l32 0 0-256-32 0L144 256 272 384z" />
    </Icon>
);

export default CircleCaretLeft;
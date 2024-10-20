
import { Icon } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=sharp-regular circle-left}
 * @preview ![circle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-left.svg)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM224 368l32 0 0-64 128 0 0-96-128 0 0-64-32 0L128 256l96 112z" />
    </Icon>
);

export default CircleLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=regular circle-left}
 * @preview ![circle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-left.svg)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 128l-32 0L96 256 224 384l32 0 0-80 128 0 0-96-128 0 0-80z" />
    </Icon>
);

export default CircleLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=sharp-regular circle-right}
 * @preview ![circle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-right.svg)
 */
const CircleRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM288 144l-32 0 0 64-128 0 0 96 128 0 0 64 32 0 96-112L288 144z" />
    </Icon>
);

export default CircleRight;
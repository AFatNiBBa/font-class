
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=sharp-regular circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm345 17l17-17-17-17L241 135l-17-17L190.1 152l17 17 87 87-87 87-17 17L224 393.9l17-17L345 273z" />
    </Icon>
);

export default CircleChevronRight;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=sharp-regular circle-arrow-right}
 * @preview ![circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-arrow-right.svg)
 */
const CircleArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm393 17l17-17-17-17-88-88-17-17L254.1 168l17 17 47 47L136 232l-24 0 0 48 24 0 182.1 0-47 47-17 17L288 377.9l17-17 88-88z" />
    </Icon>
);

export default CircleArrowRight;
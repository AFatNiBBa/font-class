
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=sharp-regular circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM167 239l-17 17 17 17L271 377l17 17L321.9 360l-17-17-87-87 87-87 17-17L288 118.1l-17 17L167 239z" />
    </Icon>
);

export default CircleChevronLeft;
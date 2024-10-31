
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=sharp-solid circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM167 239L271 135l17-17L321.9 152l-17 17-87 87 87 87 17 17L288 393.9l-17-17L167 273l-17-17 17-17z" />
    </Icon>
);

export default CircleChevronLeft;
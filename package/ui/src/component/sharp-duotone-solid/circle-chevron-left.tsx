
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=sharp-duotone-solid circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm150.1 0c5.7-5.7 11.3-11.3 17-17c34.7-34.7 69.3-69.3 104-104c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17l-87 87c29 29 58 58 87 87c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9l-17-17c-34.7-34.7-69.3-69.3-104-104l-17-17z" />
        <path d="M150.1 256l17-17L271 135l17-17L321.9 152l-17 17-87 87 87 87 17 17L288 393.9l-17-17L167 273l-17-17z" />
    </Icon>
);

export default CircleChevronLeft;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-chevron-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=sharp-duotone-solid square-chevron-left}
 * @preview ![square-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-chevron-left.svg)
 */
const SquareChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM118.1 256l17 17L239 377l17 17c11.3-11.3 22.6-22.6 33.9-33.9c-5.7-5.7-11.3-11.3-17-17c-29-29-58-58-87-87l87-87c5.7-5.7 11.3-11.3 17-17L256 118.1c-5.7 5.7-11.3 11.3-17 17c-34.7 34.7-69.3 69.3-104 104c-5.7 5.7-11.3 11.3-17 17z" />
        <path d="M118.1 256l17-17L239 135l17-17L289.9 152l-17 17-87 87 87 87 17 17L256 393.9l-17-17L135 273l-17-17z" />
    </Icon>
);

export default SquareChevronLeft;
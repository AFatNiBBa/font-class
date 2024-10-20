
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-chevron-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-right?s=sharp-duotone-solid square-chevron-right}
 * @preview ![square-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-chevron-right.svg)
 */
const SquareChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM158.1 152L192 118.1c5.7 5.7 11.3 11.3 17 17c34.7 34.7 69.3 69.3 104 104c5.7 5.7 11.3 11.3 17 17l-17 17c-34.7 34.7-69.3 69.3-104 104c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c29-29 58-58 87-87c-29-29-58-58-87-87c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M329.9 256l-17 17L209 377l-17 17L158.1 360l17-17 87-87-87-87-17-17L192 118.1l17 17L313 239l17 17z" />
    </Icon>
);

export default SquareChevronRight;
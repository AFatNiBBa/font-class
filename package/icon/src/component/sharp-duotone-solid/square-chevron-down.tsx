
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-chevron-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-down?s=sharp-duotone-solid square-chevron-down}
 * @preview ![square-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-chevron-down.svg)
 */
const SquareChevronDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM86.1 224L120 190.1l17 17 87 87c29-29 58-58 87-87c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-34.7 34.7-69.3 69.3-104 104c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-34.7-34.7-69.3-69.3-104-104c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M224 361.9l17-17L345 241l17-17L328 190.1l-17 17-87 87-87-87-17-17L86.1 224l17 17L207 345l17 17z" />
    </Icon>
);

export default SquareChevronDown;
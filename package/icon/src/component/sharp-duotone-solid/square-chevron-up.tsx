
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-chevron-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-up?s=sharp-duotone-solid square-chevron-up}
 * @preview ![square-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-chevron-up.svg)
 */
const SquareChevronUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM86.1 288c5.7-5.7 11.3-11.3 17-17L207 167l17-17 17 17c34.7 34.7 69.3 69.3 104 104c5.7 5.7 11.3 11.3 17 17L328 321.9l-17-17c-29-29-58-58-87-87c-29 29-58 58-87 87c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9z" />
        <path d="M224 150.1l17 17L345 271l17 17L328 321.9l-17-17-87-87-87 87-17 17L86.1 288l17-17L207 167l17-17z" />
    </Icon>
);

export default SquareChevronUp;
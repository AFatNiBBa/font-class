
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-7` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-7?s=sharp-duotone-solid square-7}
 * @preview ![square-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-7.svg)
 */
const Square_7: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l24 0 144 0 24 0 0 29.4-2.3 4.9L213.5 384l-53 0 3.9-8.2L258.2 176 152 176l-24 0 0-48z" />
        <path d="M320 128l-24 0-144 0-24 0 0 48 24 0 106.2 0L164.3 375.8l-3.9 8.2 53 0L317.7 162.2l2.3-4.9 0-29.4z" />
    </Icon>
);

export default Square_7;
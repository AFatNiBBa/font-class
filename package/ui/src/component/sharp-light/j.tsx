
import { Icon } from "../../index";

/**
 * A component that renders the `j` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=sharp-light j}
 * @preview ![j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/j.svg)
 */
const J: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 32l0 16 0 272c0 88.4-71.6 160-160 160S0 408.4 0 320l0-48 0-16 32 0 0 16 0 48c0 70.7 57.3 128 128 128s128-57.3 128-128l0-272 0-16 32 0z" />
    </Icon>
);

export default J;
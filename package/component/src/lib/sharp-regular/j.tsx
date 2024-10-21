
import { Icon } from "../../index";

/**
 * A component that renders the `j` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=sharp-regular j}
 * @preview ![j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/j.svg)
 */
const J: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 32l0 24 0 264c0 88.4-71.6 160-160 160S0 408.4 0 320l0-40 0-24 48 0 0 24 0 40c0 61.9 50.1 112 112 112s112-50.1 112-112l0-264 0-24 48 0z" />
    </Icon>
);

export default J;
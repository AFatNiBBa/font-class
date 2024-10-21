
import { Icon } from "../../index";

/**
 * A component that renders the `j` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=sharp-solid j}
 * @preview ![j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/j.svg)
 */
const J: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 32l0 32 0 256c0 88.4-71.6 160-160 160S0 408.4 0 320l0-32 0-32 64 0 0 32 0 32c0 53 43 96 96 96s96-43 96-96l0-256 0-32 64 0z" />
    </Icon>
);

export default J;
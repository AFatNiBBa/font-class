
import { Icon } from "../../index";

/**
 * A component that renders the `j` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=sharp-thin j}
 * @preview ![j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/j.svg)
 */
const J: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 32l0 8 0 280c0 88.4-71.6 160-160 160S0 408.4 0 320l0-56 0-8 16 0 0 8 0 56c0 79.5 64.5 144 144 144s144-64.5 144-144l0-280 0-8 16 0z" />
    </Icon>
);

export default J;
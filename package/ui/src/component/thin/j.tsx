
import { Icon } from "../../index";

/**
 * A component that renders the `j` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=thin j}
 * @preview ![j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/j.svg)
 */
const J: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M312 32c4.4 0 8 3.6 8 8l0 280c0 88.4-71.6 160-160 160S0 408.4 0 320l0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56c0 79.5 64.5 144 144 144s144-64.5 144-144l0-280c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default J;
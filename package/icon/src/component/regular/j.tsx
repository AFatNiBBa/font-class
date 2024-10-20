
import { Icon } from "../../index";

/**
 * A component that renders the `j` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=regular j}
 * @preview ![j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/j.svg)
 */
const J: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M296 32c13.3 0 24 10.7 24 24l0 264c0 88.4-71.6 160-160 160S0 408.4 0 320l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 61.9 50.1 112 112 112s112-50.1 112-112l0-264c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default J;
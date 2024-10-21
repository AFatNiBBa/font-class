
import { Icon } from "../../index";

/**
 * A component that renders the `tilde` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=sharp-thin tilde}
 * @preview ![tilde](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tilde.svg)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 144l8 0 120 0 3.5 0 2.4 2.6L323.5 352 432 352l0-160 0-8 16 0 0 8 0 168 0 8-8 0-120 0-3.5 0-2.4-2.6L124.5 160 16 160l0 160 0 8L0 328l0-8L0 152l0-8z" />
    </Icon>
);

export default Tilde;

import { Icon } from "../../index";

/**
 * A component that renders the `tilde` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=sharp-light tilde}
 * @preview ![tilde](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tilde.svg)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 128l16 0 120 0 7.8 0 4.8 6.1L319.8 352l96.2 0 0-160 0-16 32 0 0 16 0 176 0 16-16 0-120 0-7.8 0-4.8-6.1L128.2 160 32 160l0 160 0 16L0 336l0-16L0 144l0-16z" />
    </Icon>
);

export default Tilde;
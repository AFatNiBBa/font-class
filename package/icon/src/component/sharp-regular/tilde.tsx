
import { Icon } from "../../index";

/**
 * A component that renders the `tilde` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=sharp-regular tilde}
 * @preview ![tilde](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tilde.svg)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 128l24 0 112 0 11.1 0 7.2 8.5L323.1 336l76.9 0 0-144 0-24 48 0 0 24 0 168 0 24-24 0-112 0-11.1 0-7.2-8.5L124.9 176 48 176l0 144 0 24L0 344l0-24L0 152l0-24z" />
    </Icon>
);

export default Tilde;
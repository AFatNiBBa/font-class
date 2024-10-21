
import { Icon } from "../../index";

/**
 * A component that renders the `tilde` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=sharp-solid tilde}
 * @preview ![tilde](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tilde.svg)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 128l32 0 96 0 13.3 0 9.4 9.4L333.3 320l50.7 0 0-128 0-32 64 0 0 32 0 160 0 32-32 0-96 0-13.3 0-9.4-9.4L114.7 192 64 192l0 128 0 32L0 352l0-32L0 160l0-32z" />
    </Icon>
);

export default Tilde;

import { Icon } from "../../index";

/**
 * A component that renders the `tarp` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=sharp-regular tarp}
 * @preview ![tarp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tarp.svg)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l480 0 0 176-112 0 0 112L48 400l0-288zM576 320l0-208 0-48-48 0L48 64 0 64l0 48L0 400l0 48 48 0 400 0L576 320zM112 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Tarp;
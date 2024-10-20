
import { Icon } from "../../index";

/**
 * A component that renders the `tarp` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=sharp-light tarp}
 * @preview ![tarp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tarp.svg)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 416L32 96l512 0 0 160-144 0-16 0 0 16 0 144L32 416zm386.7 0l-2.7 0 0-128 128 0 0 2.7L418.7 416zM576 304l0-208 0-32-32 0L32 64 0 64 0 96 0 416l0 32 32 0 400 0L576 304zM96 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Tarp;
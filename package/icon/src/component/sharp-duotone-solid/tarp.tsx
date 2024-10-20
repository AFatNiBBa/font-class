
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tarp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=sharp-duotone-solid tarp}
 * @preview ![tarp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tarp.svg)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l416 0 0-160 160 0 0-224L0 64zm128 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M576 288L416 448l0-160 160 0z" />
    </Icon>
);

export default Tarp;
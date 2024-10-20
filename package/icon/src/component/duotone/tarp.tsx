
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tarp` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=duotone tarp}
 * @preview ![tarp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tarp.svg)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l352 0 0-128c0-17.7 14.3-32 32-32l128 0 0-160c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M576 288L416 448l0-128c0-17.7 14.3-32 32-32l128 0z" />
    </Icon>
);

export default Tarp;
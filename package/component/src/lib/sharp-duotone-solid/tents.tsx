
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tents` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tents?s=sharp-duotone-solid tents}
 * @preview ![tents](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tents.svg)
 */
const Tents: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M228.8 124.8l12.9 8.6 192 128 11.9 7.9 2 14.2 9.8 68.5L640 352 608 128 416 0 228.8 124.8z" />
        <path d="M32 288L0 512H224V352l96 160H448L416 288 224 160 32 288z" />
    </Icon>
);

export default Tents;
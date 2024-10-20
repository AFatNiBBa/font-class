
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=sharp-duotone-solid mountain-sun}
 * @preview ![mountain-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mountain-sun.svg)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 80a80 80 0 1 0 160 0A80 80 0 1 0 480 80z" />
        <path d="M256 64L0 448l0 64 320 0 192 0 128 0 0-64L480 192 412.9 299.4 256 64z" />
    </Icon>
);

export default MountainSun;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `ski-boot-ski` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ski-boot-ski?s=sharp-duotone-solid ski-boot-ski}
 * @preview ![ski-boot-ski](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ski-boot-ski.svg)
 */
const SkiBootSki: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 64 32 0 576 0 32 0 0-32 0-64 0-32-64 0 0 32 0 32L32 448 0 448zM116.7 240l112 0c14.4-69.3 28.9-138.7 43.3-208L160 32 116.7 240z" />
        <path d="M80 416l36.7-176 112 0L272 32l73.3 0L352 0l64 0L389.3 128 336 128l-16 0 0 32 16 0 46.7 0-10 48L320 208l-16 0 0 32 16 0 46 0 114 48 0 128L80 416z" />
    </Icon>
);

export default SkiBootSki;
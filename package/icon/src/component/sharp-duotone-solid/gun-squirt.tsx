
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gun-squirt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-squirt?s=sharp-duotone-solid gun-squirt}
 * @preview ![gun-squirt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gun-squirt.svg)
 */
const GunSquirt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 160l0 32 416 0 0-32L64 160zM218 376l54 0 0 16 0 24 48 0 0-24 0-40 0-40 0-24-48 0 0 24 0 16-42 0-12 48z" />
        <path d="M128 56l0-24L80 32l0 24 0 9.3C34.6 72.9 0 112.4 0 160c0 50.4 38.8 91.7 88.1 95.7L32 480l160 0 56-224 264 0 32 0 0-32 0-32 32 0 0-64-32 0 0-32 0-32-32 0L128 64l0-8zm352 72l0 64L64 192l0-64 416 0z" />
    </Icon>
);

export default GunSquirt;
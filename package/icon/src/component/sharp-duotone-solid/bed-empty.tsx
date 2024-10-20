
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=sharp-duotone-solid bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l32 0 512 0 32 0 0 32 0 64-32 0L64 320l0-64 0-32z" />
        <path d="M64 32l0 32 0 256 544 0 32 0 0 32 0 96 0 32-64 0 0-32 0-32L64 416l0 32 0 32L0 480l0-32 0-64 0-64L0 64 0 32l64 0z" />
    </Icon>
);

export default BedEmpty;
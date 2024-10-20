
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=sharp-duotone-solid bed}
 * @preview ![bed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bed.svg)
 */
const Bed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 208A80 80 0 1 1 96 208a80 80 0 1 1 160 0zm32-80l32 0 224 0c53 0 96 43 96 96l0 64 0 32-32 0-288 0-32 0 0-32 0-128 0-32z" />
        <path d="M64 32l0 32 0 256 544 0 32 0 0 32 0 96 0 32-64 0 0-32 0-32L64 416l0 32 0 32L0 480l0-32 0-64 0-64L0 64 0 32l64 0z" />
    </Icon>
);

export default Bed;
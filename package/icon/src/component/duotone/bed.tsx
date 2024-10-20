
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=duotone bed}
 * @preview ![bed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bed.svg)
 */
const Bed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 208A80 80 0 1 1 96 208a80 80 0 1 1 160 0zm32-48c0-17.7 14.3-32 32-32l224 0c53 0 96 43 96 96l0 64 0 32-32 0-288 0-32 0 0-32 0-128z" />
        <path d="M32 32c17.7 0 32 14.3 32 32l0 256 544 0 32 0 0 32 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32z" />
    </Icon>
);

export default Bed;
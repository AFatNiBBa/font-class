
import { Icon, generic } from "../../index";

/**
 * A component that renders the `loveseat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loveseat?s=sharp-duotone-solid loveseat}
 * @preview ![loveseat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/loveseat.svg)
 */
const Loveseat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 32l0 192 32 0 0 128 320 0 0-128 32 0 0-192L64 32z" />
        <path d="M96 224L0 224 0 480l96 0 0-32 320 0 0 32 96 0 0-256-96 0 0 128L96 352l0-128z" />
    </Icon>
);

export default Loveseat;
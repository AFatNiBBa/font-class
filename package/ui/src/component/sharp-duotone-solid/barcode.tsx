
import { Icon, generic } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-duotone-solid barcode}
 * @preview ![barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/barcode.svg)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l64 0L64 32 0 32zm160 0l0 448 64 0 0-448-64 0zm288 0l0 448 64 0 0-448-64 0z" />
        <path d="M96 32l32 0 0 448-32 0L96 32zm160 0l64 0 0 448-64 0 0-448zm160 0l0 448-32 0 0-448 32 0z" />
    </Icon>
);

export default Barcode;
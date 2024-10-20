
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-light barcode}
 * @preview ![barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/barcode.svg)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l32 0 0 448L0 480 0 32zm64 0l32 0 0 448-32 0L64 32zm96 0l0 448-32 0 0-448 32 0zm64 0l32 0 0 448-32 0 0-448zm96 0l0 448-32 0 0-448 32 0zm64 0l32 0 0 448-32 0 0-448zm128 0l0 448-32 0 0-448 32 0z" />
    </Icon>
);

export default Barcode;
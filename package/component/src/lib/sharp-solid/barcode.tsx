
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-solid barcode}
 * @preview ![barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/barcode.svg)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32L0 32 0 480l64 0L64 32zm64 0L96 32l0 448 32 0 0-448zm96 0l-64 0 0 448 64 0 0-448zm96 0l-64 0 0 448 64 0 0-448zm128 0l0 448 64 0 0-448-64 0zm-64 0l0 448 32 0 0-448-32 0z" />
    </Icon>
);

export default Barcode;
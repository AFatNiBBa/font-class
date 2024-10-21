
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-regular barcode}
 * @preview ![barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/barcode.svg)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 32L0 32 0 480l48 0L48 32zm80 0L96 32l0 448 32 0 0-448zm80 0l-48 0 0 448 48 0 0-448zm112 0l-48 0 0 448 48 0 0-448zm144 0l0 448 48 0 0-448-48 0zm-64 0l0 448 32 0 0-448-32 0z" />
    </Icon>
);

export default Barcode;

import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-thin barcode}
 * @preview ![barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/barcode.svg)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l16 0 0 448L0 480 0 32zm256 0l16 0 0 448-16 0 0-448zm144 0l0 448-16 0 0-448 16 0zm-96 0l16 0 0 448-16 0 0-448zM64 32l0 448-16 0L48 32l16 0zm384 0l16 0 0 448-16 0 0-448zm64 0l0 448-16 0 0-448 16 0zM112 32l16 0 0 448-16 0 0-448zm88 0l0 448-16 0 0-448 16 0z" />
    </Icon>
);

export default Barcode;
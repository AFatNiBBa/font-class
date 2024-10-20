
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-barcode` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-barcode?s=sharp-regular rectangle-barcode}
 * @preview ![rectangle-barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rectangle-barcode.svg)
 */
const RectangleBarcode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l0 352 480 0 0-352L48 80zM0 32l48 0 480 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm144 96l0 256-48 0 0-256 48 0zm64 0l0 256-32 0 0-256 32 0zm32 0l48 0 0 256-48 0 0-256zm160 0l0 256-48 0 0-256 48 0zm48 0l32 0 0 256-32 0 0-256z" />
    </Icon>
);

export default RectangleBarcode;
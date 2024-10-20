
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-barcode` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-barcode?s=sharp-light rectangle-barcode}
 * @preview ![rectangle-barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle-barcode.svg)
 */
const RectangleBarcode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 384L32 448 32 64l512 0zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32zm64 96l0 256 32 0 0-256-32 0zm320 0l-32 0 0 256 32 0 0-256zm32 0l0 256 32 0 0-256-32 0zm-256 0l-32 0 0 256 32 0 0-256zm32 0l0 256 32 0 0-256-32 0zm112 0l-32 0 0 256 32 0 0-256z" />
    </Icon>
);

export default RectangleBarcode;
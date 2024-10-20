
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-barcode` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-barcode?s=sharp-duotone-solid rectangle-barcode}
 * @preview ![rectangle-barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-barcode.svg)
 */
const RectangleBarcode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zm96 96l48 0 0 256-48 0 0-256zm80 0l32 0 0 256-32 0 0-256zm64 0l48 0 0 256-48 0 0-256zm112 0l48 0 0 256-48 0 0-256zm96 0l32 0 0 256-32 0 0-256z" />
        <path d="M96 128l48 0 0 256-48 0 0-256zm80 0l32 0 0 256-32 0 0-256zm112 0l0 256-48 0 0-256 48 0zm64 0l48 0 0 256-48 0 0-256zm128 0l0 256-32 0 0-256 32 0z" />
    </Icon>
);

export default RectangleBarcode;
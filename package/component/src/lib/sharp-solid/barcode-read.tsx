
import { Icon } from "../../index";

/**
 * A component that renders the `barcode-read` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-read?s=sharp-solid barcode-read}
 * @preview ![barcode-read](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/barcode-read.svg)
 */
const BarcodeRead: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0L0 0 0 24 0 160l48 0L48 48l112 0 0-48L24 0zM192 384l0-256-64 0 0 256 64 0zM352 128l-64 0 0 256 64 0 0-256zm96 0l-64 0 0 256 64 0 0-256zM576 0L552 0 416 0l0 48 112 0 0 112 48 0 0-136 0-24zM24 512l136 0 0-48L48 464l0-112L0 352 0 488l0 24 24 0zm552 0l0-24 0-136-48 0 0 112-112 0 0 48 136 0 24 0zM256 128l-32 0 0 256 32 0 0-256z" />
    </Icon>
);

export default BarcodeRead;

import { Icon } from "../../index";

/**
 * A component that renders the `barcode-read` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-read?s=sharp-light barcode-read}
 * @preview ![barcode-read](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/barcode-read.svg)
 */
const BarcodeRead: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L16 0 144 0l16 0 0 32-16 0L32 32l0 112 0 16L0 160l0-16L0 16 0 0zM128 128l32 0 0 256-32 0 0-256zm64 0l32 0 0 256-32 0 0-256zM416 384l0-256 32 0 0 256-32 0zM288 128l0 256-32 0 0-256 32 0zm48 0l32 0 0 256-32 0 0-256zM560 0l16 0 0 16 0 128 0 16-32 0 0-16 0-112L432 32l-16 0 0-32 16 0L560 0zM0 512l0-16L0 368l0-16 32 0 0 16 0 112 112 0 16 0 0 32-16 0L16 512 0 512zm560 0l-128 0-16 0 0-32 16 0 112 0 0-112 0-16 32 0 0 16 0 128 0 16-16 0z" />
    </Icon>
);

export default BarcodeRead;
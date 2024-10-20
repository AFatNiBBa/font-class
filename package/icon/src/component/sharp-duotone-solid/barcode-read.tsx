
import { Icon, generic } from "../../index";

/**
 * A component that renders the `barcode-read` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-read?s=sharp-duotone-solid barcode-read}
 * @preview ![barcode-read](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/barcode-read.svg)
 */
const BarcodeRead: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 24 0 136l0 24 48 0 0-24 0-88 88 0 24 0 0-48L136 0 24 0 0 0zM0 352l0 24L0 488l0 24 24 0 112 0 24 0 0-48-24 0-88 0 0-88 0-24L0 352zM416 0l0 48 24 0 88 0 0 88 0 24 48 0 0-24 0-112 0-24L552 0 440 0 416 0zm0 464l0 48 24 0 112 0 24 0 0-24 0-112 0-24-48 0 0 24 0 88-88 0-24 0z" />
        <path d="M192 128l-64 0 0 256 64 0 0-256zm160 0l-64 0 0 256 64 0 0-256zm32 0l0 256 64 0 0-256-64 0zm-128 0l-32 0 0 256 32 0 0-256z" />
    </Icon>
);

export default BarcodeRead;
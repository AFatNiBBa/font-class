
import { Icon } from "../../index";

/**
 * A component that renders the `barcode-scan` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-scan?s=regular barcode-scan}
 * @preview ![barcode-scan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/barcode-scan.svg)
 */
const BarcodeScan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M88 32C74.7 32 64 42.7 64 56l0 136 48 0 0-136c0-13.3-10.7-24-24-24zM64 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136-48 0 0 136zm96 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144-32 0 0 144zm64-8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136-48 0 0 136zm0-400l0 136 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24zM336 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136-48 0 0 136zm0-400l0 136 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24zM464 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144-32 0 0 144zm0-416l0 144 32 0 0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 408c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136-48 0 0 136zm0-400l0 136 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24zM160 192l32 0 0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144zM0 256c0 13.3 10.7 24 24 24l592 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 232c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default BarcodeScan;
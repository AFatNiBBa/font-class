
import { Icon, generic } from "../../index";

/**
 * A component that renders the `barcode-scan` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-scan?s=duotone barcode-scan}
 * @preview ![barcode-scan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/barcode-scan.svg)
 */
const BarcodeScan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0-13.3 10.7-24 24-24l592 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z" />
        <path d="M64 56c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 136-64 0L64 56zm0 264l64 0 0 136c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-136zm96 0l32 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144zm64 0l64 0 0 136c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-136zm64-128l-64 0 0-136c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 136zm32 128l64 0 0 136c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-136zm64-128l-64 0 0-136c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 136zm64 128l32 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144zm32-128l-32 0 0-144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 144zm32 128l64 0 0 136c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-136zm64-128l-64 0 0-136c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 136zm-384 0l-32 0 0-144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 144z" />
    </Icon>
);

export default BarcodeScan;
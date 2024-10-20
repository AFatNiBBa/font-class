
import { Icon, generic } from "../../index";

/**
 * A component that renders the `barcode-read` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-read?s=duotone barcode-read}
 * @preview ![barcode-read](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/barcode-read.svg)
 */
const BarcodeRead: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 56l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-4.4 3.6-8 8-8l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 0C25.1 0 0 25.1 0 56zM0 376l0 80c0 30.9 25.1 56 56 56l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-4.4 0-8-3.6-8-8l0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24zM416 24c0 13.3 10.7 24 24 24l80 0c4.4 0 8 3.6 8 8l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-30.9-25.1-56-56-56L440 0c-13.3 0-24 10.7-24 24zm0 464c0 13.3 10.7 24 24 24l80 0c30.9 0 56-25.1 56-56l0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 4.4-3.6 8-8 8l-80 0c-13.3 0-24 10.7-24 24z" />
        <path d="M152 128c-13.3 0-24 10.7-24 24l0 208c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-208c0-13.3-10.7-24-24-24l-16 0zm160 0c-13.3 0-24 10.7-24 24l0 208c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-208c0-13.3-10.7-24-24-24l-16 0zm72 24l0 208c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-208c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24zM240 128c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default BarcodeRead;
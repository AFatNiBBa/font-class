
import { Icon } from "../../index";

/**
 * A component that renders the `barcode-scan` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-scan?s=sharp-solid barcode-scan}
 * @preview ![barcode-scan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/barcode-scan.svg)
 */
const BarcodeScan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 32L64 32l0 160 64 0 0-160zM64 480l64 0 0-160-64 0 0 160zm96 0l32 0 0-160-32 0 0 160zm64 0l64 0 0-160-64 0 0 160zm0-288l64 0 0-160-64 0 0 160zm96 288l64 0 0-160-64 0 0 160zm0-288l64 0 0-160-64 0 0 160zM448 480l32 0 0-160-32 0 0 160zm0-288l32 0 0-160-32 0 0 160zm64 288l64 0 0-160-64 0 0 160zm0-288l64 0 0-160-64 0 0 160zm-352 0l32 0 0-160-32 0 0 160zM0 232l0 48 640 0 0-48L0 232z" />
    </Icon>
);

export default BarcodeScan;
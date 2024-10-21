
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=sharp-thin scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M43.3 40.7L36 37.4 29.4 52l7.3 3.3L548.7 288 16 288 0 288l0 16L0 464l0 16 16 0 544 0 16 0 0-16 0-48 0-8 0-104 0-16c0-3.1-1.8-6-4.7-7.3l-528-240zM560 304l0 104 0 8 0 48L16 464l0-160 544 0zM208 384a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 400a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ScannerImage;
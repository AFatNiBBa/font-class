
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=sharp-regular scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M66.2 42.3L44.4 32.1 24.1 75.6 45.8 85.7 478.2 288 48 288 0 288l0 48 0 96 0 48 48 0 480 0 48 0 0-48 0-24 0-24 0-48 0-40 0-8 0-7.3-13.8-6.5-496-232zM528 336l0 48 0 24 0 24L48 432l0-96 480 0zM152 360l0 48 48 0 0-48-48 0zm-32 0l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default ScannerImage;
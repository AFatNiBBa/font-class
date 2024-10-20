
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=sharp-light scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M54.8 41.5L40.3 34.7l-13.6 29 14.5 6.8L505.2 288 32 288 0 288l0 32L0 448l0 32 32 0 512 0 32 0 0-32 0-40 0-16 0-72 0-24 0-8 0-2.2-9.2-4.3-512-240zM544 320l0 72 0 16 0 40L32 448l0-128 512 0zM208 360l-48 0 0 48 48 0 0-48zM80 360l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default ScannerImage;
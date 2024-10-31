
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=sharp-solid scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M78.5 46.7L50 32.2 21 89.2l28.5 14.5L410.8 288 32 288 0 288l0 32L0 448l0 32 32 0 512 0 32 0 0-32 0-128 0-19.6-17.5-8.9L78.5 46.7zM64 352l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default ScannerImage;
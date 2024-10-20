
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=solid scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M79.1 35.8c-15.6-8.3-35-2.4-43.3 13.2s-2.4 35 13.2 43.3L416 288 64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-76.8c0-23.6-13-45.3-33.9-56.5L79.1 35.8zM64 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ScannerImage;

import { Icon } from "../../index";

/**
 * A component that renders the `scanner-touchscreen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-touchscreen?s=sharp-solid scanner-touchscreen}
 * @preview ![scanner-touchscreen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scanner-touchscreen.svg)
 */
const ScannerTouchscreen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0l0 64-64 0 0-64 64 0zM352 0l0 64-64 0 0-64 64 0zM224 0l32 0 0 64-32 0 0-64zM416 0l0 288-32 0L384 0l32 0zm32 0l64 0 0 288-64 0L448 0zM0 96l352 0 0 416L0 512 0 96zm64 64l0 288 224 0 0-288L64 160z" />
    </Icon>
);

export default ScannerTouchscreen;
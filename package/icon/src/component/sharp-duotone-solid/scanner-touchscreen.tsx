
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-touchscreen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-touchscreen?s=sharp-duotone-solid scanner-touchscreen}
 * @preview ![scanner-touchscreen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scanner-touchscreen.svg)
 */
const ScannerTouchscreen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 512l352 0 0-416L0 96zm64 64l224 0 0 288L64 448l0-288z" />
        <path d="M192 0L128 0l0 64 64 0 0-64zM352 0L288 0l0 64 64 0 0-64zM224 0l0 64 32 0 0-64L224 0zM416 0L384 0l0 288 32 0L416 0zm32 0l0 288 64 0L512 0 448 0zM288 160L64 160l0 288 224 0 0-288z" />
    </Icon>
);

export default ScannerTouchscreen;
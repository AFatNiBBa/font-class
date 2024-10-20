
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-keyboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-keyboard?s=sharp-duotone-solid scanner-keyboard}
 * @preview ![scanner-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scanner-keyboard.svg)
 */
const ScannerKeyboard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 512l352 0 0-416L0 96zm64 64l224 0 0 64L64 224l0-64zm0 128l96 0 0 64-96 0 0-64zm0 96l96 0 0 64-96 0 0-64zm128-96l96 0 0 64-96 0 0-64zm0 96l96 0 0 64-96 0 0-64z" />
        <path d="M192 0l0 64-64 0 0-64 64 0zM352 0l0 64-64 0 0-64 64 0zM224 0l32 0 0 64-32 0 0-64zM416 0l0 288-32 0L384 0l32 0zm32 0l64 0 0 288-64 0L448 0zM288 160l0 64L64 224l0-64 224 0z" />
    </Icon>
);

export default ScannerKeyboard;
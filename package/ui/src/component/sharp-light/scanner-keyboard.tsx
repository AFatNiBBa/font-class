
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-keyboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-keyboard?s=sharp-light scanner-keyboard}
 * @preview ![scanner-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/scanner-keyboard.svg)
 */
const ScannerKeyboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 64 32 0 0-64L128 0zM320 0l0 64 32 0 0-64L320 0zM224 0L192 0l0 64 32 0 0-64zM400 0l0 288 32 0L432 0 400 0zM512 0L480 0l0 288 32 0L512 0zM320 128l0 352L32 480l0-352 288 0zM32 96L0 96l0 32L0 480l0 32 32 0 288 0 32 0 0-32 0-352 0-32-32 0L32 96zm64 96l160 0 0 64L96 256l0-64zM64 160l0 32 0 64 0 32 32 0 160 0 32 0 0-32 0-64 0-32-32 0L96 160l-32 0zm96 160l-96 0 0 32 96 0 0-32zM64 384l0 32 96 0 0-32-96 0zm224-64l-96 0 0 32 96 0 0-32zm-96 64l0 32 96 0 0-32-96 0z" />
    </Icon>
);

export default ScannerKeyboard;
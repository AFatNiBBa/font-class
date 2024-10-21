
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-touchscreen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-touchscreen?s=sharp-regular scanner-touchscreen}
 * @preview ![scanner-touchscreen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/scanner-touchscreen.svg)
 */
const ScannerTouchscreen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 64 48 0 0-64L128 0zM304 0l0 64 48 0 0-64L304 0zM256 0L224 0l0 64 32 0 0-64zM384 0l0 288 32 0L416 0 384 0zM512 0L464 0l0 288 48 0L512 0zM48 144l256 0 0 320L48 464l0-320zm0-48L0 96l0 48L0 464l0 48 48 0 256 0 48 0 0-48 0-320 0-48-48 0L48 96zM272 432l0-256L80 176l0 256 192 0z" />
    </Icon>
);

export default ScannerTouchscreen;
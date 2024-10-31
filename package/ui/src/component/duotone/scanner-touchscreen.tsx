
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-touchscreen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-touchscreen?s=duotone scanner-touchscreen}
 * @preview ![scanner-touchscreen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scanner-touchscreen.svg)
 */
const ScannerTouchscreen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 96C28.7 96 0 124.7 0 160zm64 24c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24l0 240c0 13.3-10.7 24-24 24L88 448c-13.3 0-24-10.7-24-24l0-240z" />
        <path d="M152 0c-13.3 0-24 10.7-24 24l0 40 64 0 0-40c0-13.3-10.7-24-24-24L152 0zM312 0c-13.3 0-24 10.7-24 24l0 40 64 0 0-40c0-13.3-10.7-24-24-24L312 0zM224 16l0 48 32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM400 0c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16s16-7.2 16-16l0-256c0-8.8-7.2-16-16-16zm48 24l0 240c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-240c0-13.3-10.7-24-24-24L472 0c-13.3 0-24 10.7-24 24zM88 160c-13.3 0-24 10.7-24 24l0 240c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24l0-240c0-13.3-10.7-24-24-24L88 160z" />
    </Icon>
);

export default ScannerTouchscreen;
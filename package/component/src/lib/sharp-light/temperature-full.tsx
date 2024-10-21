
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-full` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-full?s=sharp-light temperature-full}
 * @preview ![temperature-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/temperature-full.svg)
 */
const TemperatureFull: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 275l-10.7 9.5C62.4 305.1 48 334.9 48 368c0 61.9 50.1 112 112 112s112-50.1 112-112c0-33.2-14.4-62.9-37.3-83.5L224 275l0-14.3L224 32 96 32l0 228.7L96 275zM224 0l32 0 0 32 0 228.7c29.5 26.4 48 64.7 48 107.3c0 79.5-64.5 144-144 144S16 447.6 16 368c0-42.6 18.5-81 48-107.3L64 32 64 0 96 0 224 0zM160 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 32c-35.3 0-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-210 0-16 32 0 0 16 0 210c27.6 7.1 48 32.2 48 62c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default TemperatureFull;
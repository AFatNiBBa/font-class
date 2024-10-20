
import { Icon } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=light window-maximize}
 * @preview ![window-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/window-maximize.svg)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 96 448 0 0-96c0-17.7-14.3-32-32-32L64 64zM32 224l0 192c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-192L32 224zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default WindowMaximize;

import { Icon } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=light window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 32L208 32c-26.5 0-48 21.5-48 48l0 16-32 0 0-16c0-44.2 35.8-80 80-80L432 0c44.2 0 80 35.8 80 80l0 224c0 44.2-35.8 80-80 80l-16 0 0-32 16 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48zM320 160L64 160c-17.7 0-32 14.3-32 32l0 64 320 0 0-64c0-17.7-14.3-32-32-32zM32 448c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-160L32 288l0 160zM64 128l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default WindowRestore;
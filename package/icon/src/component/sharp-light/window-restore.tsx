
import { Icon } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=sharp-light window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32L160 32l0 64-32 0 0-64 0-32 32 0L480 0l32 0 0 32 0 320 0 32-32 0-64 0 0-32 64 0 0-320zM352 160L32 160l0 96 320 0 0-96zM32 480l320 0 0-192L32 288l0 192zm0-352l320 0 32 0 0 32 0 320 0 32-32 0L32 512 0 512l0-32L0 160l0-32 32 0z" />
    </Icon>
);

export default WindowRestore;
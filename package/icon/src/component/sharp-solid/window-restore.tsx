
import { Icon } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=sharp-solid window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 64L192 64l0 32-64 0 0-32 0-64 64 0L448 0l64 0 0 64 0 256 0 64-64 0-32 0 0-64 32 0 0-256zM0 512L0 128l384 0 0 384L0 512zM64 256l256 0 0-64L64 192l0 64z" />
    </Icon>
);

export default WindowRestore;
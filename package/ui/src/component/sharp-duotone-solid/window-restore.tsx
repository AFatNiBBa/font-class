
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=sharp-duotone-solid window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0l0 64 0 32 64 0 0-32 256 0 0 256-32 0 0 64 32 0 64 0 0-64 0-256 0-64L448 0 192 0 128 0z" />
        <path d="M384 128L0 128 0 512l384 0 0-384zm-64 64l0 64L64 256l0-64 256 0z" />
    </Icon>
);

export default WindowRestore;
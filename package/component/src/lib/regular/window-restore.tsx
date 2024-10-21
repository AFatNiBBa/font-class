
import { Icon } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=regular window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 48L208 48c-17.7 0-32 14.3-32 32l0 16-48 0 0-16c0-44.2 35.8-80 80-80L432 0c44.2 0 80 35.8 80 80l0 224c0 44.2-35.8 80-80 80l-16 0 0-48 16 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32zM48 448c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-192L48 256l0 192zM64 128l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default WindowRestore;

import { Icon } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=thin window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 16L208 16c-35.3 0-64 28.7-64 64l0 16-16 0 0-16c0-44.2 35.8-80 80-80L432 0c44.2 0 80 35.8 80 80l0 224c0 44.2-35.8 80-80 80l-16 0 0-16 16 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64zM320 144L64 144c-26.5 0-48 21.5-48 48l0 64 352 0 0-64c0-26.5-21.5-48-48-48zM16 448c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-176L16 272l0 176zM64 128l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default WindowRestore;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=duotone window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 80l0 16 64 0 0-16c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-16 0 0 64 16 0c44.2 0 80-35.8 80-80l0-224c0-44.2-35.8-80-80-80L208 0c-44.2 0-80 35.8-80 80z" />
        <path d="M64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 128zm32 64l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default WindowRestore;
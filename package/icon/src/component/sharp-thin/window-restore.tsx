
import { Icon } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=sharp-thin window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 16L144 16l0 80-16 0 0-80 0-16 16 0L496 0l16 0 0 16 0 352 0 16-16 0-80 0 0-16 80 0 0-352zM368 144L16 144l0 112 352 0 0-112zM16 496l352 0 0-224L16 272l0 224zm0-368l352 0 16 0 0 16 0 352 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0z" />
    </Icon>
);

export default WindowRestore;
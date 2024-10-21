
import { Icon } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=sharp-regular window-restore}
 * @preview ![window-restore](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/window-restore.svg)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 48L176 48l0 48-48 0 0-48 0-48 48 0L464 0l48 0 0 48 0 288 0 48-48 0-48 0 0-48 48 0 0-288zM48 464l288 0 0-208L48 256l0 208zm0-336l288 0 48 0 0 48 0 288 0 48-48 0L48 512 0 512l0-48L0 176l0-48 48 0z" />
    </Icon>
);

export default WindowRestore;
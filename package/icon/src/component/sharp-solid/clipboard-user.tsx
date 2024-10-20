
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-user?s=sharp-solid clipboard-user}
 * @preview ![clipboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clipboard-user.svg)
 */
const ClipboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L0 64 0 512l384 0 0-448L282.5 64C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96L80 448l32-96 160 0z" />
    </Icon>
);

export default ClipboardUser;

import { Icon } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=sharp-solid clipboard}
 * @preview ![clipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clipboard.svg)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L0 64 0 512l384 0 0-448L282.5 64C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Clipboard;
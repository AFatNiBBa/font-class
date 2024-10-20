
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=sharp-regular clipboard}
 * @preview ![clipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clipboard.svg)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M304 64l32 0 48 0 0 48 0 352 0 48-48 0L48 512 0 512l0-48L0 112 0 64l48 0 32 0 33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64L304 64zM48 112l0 352 288 0 0-352-32 0 0 48-112 0L80 160l0-48-32 0zm144-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Clipboard;
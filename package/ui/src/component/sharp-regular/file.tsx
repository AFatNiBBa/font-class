
import { Icon } from "../../index";

/**
 * A component that renders the `file` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=sharp-regular file}
 * @preview ![file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file.svg)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 464l0-304-112 0 0-112L48 48l0 416 288 0zM48 0L256 0 384 128l0 336 0 48-48 0L48 512 0 512l0-48L0 48 0 0 48 0z" />
    </Icon>
);

export default File;
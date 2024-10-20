
import { Icon } from "../../index";

/**
 * A component that renders the `file` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=sharp-solid file}
 * @preview ![file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file.svg)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM384 128l-128 0L256 0 384 128z" />
    </Icon>
);

export default File;
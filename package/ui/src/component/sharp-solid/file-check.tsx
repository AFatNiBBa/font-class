
import { Icon } from "../../index";

/**
 * A component that renders the `file-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=sharp-solid file-check}
 * @preview ![file-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-check.svg)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zm49 281L177 409l-17 17-17-17L79 345l-17-17L96 294.1l17 17 47 47L271 247l17-17L321.9 264l-17 17z" />
    </Icon>
);

export default FileCheck;
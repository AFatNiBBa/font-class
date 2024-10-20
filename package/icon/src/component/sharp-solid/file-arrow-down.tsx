
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=sharp-solid file-arrow-down}
 * @preview ![file-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-arrow-down.svg)
 */
const FileArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM216 232l0 102.1 31-31 17-17L297.9 320l-17 17-72 72-17 17-17-17-72-72-17-17L120 286.1l17 17 31 31L168 232l0-24 48 0 0 24z" />
    </Icon>
);

export default FileArrowDown;
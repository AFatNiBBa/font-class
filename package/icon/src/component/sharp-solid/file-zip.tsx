
import { Icon } from "../../index";

/**
 * A component that renders the `file-zip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zip?s=sharp-solid file-zip}
 * @preview ![file-zip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-zip.svg)
 */
const FileZip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 144-208 0 0 208L0 512 0 0zM384 128l-128 0L256 0 384 128zM240 352l64 0 16 0 0 16 0 8 0 4.2-2.1 3.7L263 480l41 0 16 0 0 32-16 0-64 0-16 0 0-16 0-8 0-4.2 2.1-3.7L281 384l-41 0-16 0 0-32 16 0zm144 16l0 128 0 16-32 0 0-16 0-128 0-16 32 0 0 16zm32-16l16 0 24 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-8 0 0 32 0 16-32 0 0-16 0-48 0-80 0-16zm32 80l8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 48z" />
    </Icon>
);

export default FileZip;
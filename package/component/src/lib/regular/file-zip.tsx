
import { Icon } from "../../index";

/**
 * A component that renders the `file-zip` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zip?s=regular file-zip}
 * @preview ![file-zip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-zip.svg)
 */
const FileZip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 464l112 0 0 48L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM240 352l64 0c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6 .7 15.6L265.9 480l38.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6L278.1 384 240 384c-8.8 0-16-7.2-16-16s7.2-16 16-16zm144 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16s16 7.2 16 16zm32 0c0-8.8 7.2-16 16-16l24 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-8 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80zm32 64l8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 48z" />
    </Icon>
);

export default FileZip;
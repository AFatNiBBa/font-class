
import { Icon } from "../../index";

/**
 * A component that renders the `file-zipper` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zipper?s=sharp-solid file-zipper}
 * @preview ![file-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-zipper.svg)
 */
const FileZipper: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM96 32l16 0 32 0 16 0 0 32-16 0-32 0L96 64l0-32zm0 64l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zm0 64l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zM64 416l0-72L96 224l64 0 32 120 0 72L64 416zm48-80l-16 0 0 32 16 0 32 0 16 0 0-32-16 0-32 0z" />
    </Icon>
);

export default FileZipper;
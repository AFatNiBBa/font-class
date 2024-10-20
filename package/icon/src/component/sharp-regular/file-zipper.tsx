
import { Icon } from "../../index";

/**
 * A component that renders the `file-zipper` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zipper?s=sharp-regular file-zipper}
 * @preview ![file-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-zipper.svg)
 */
const FileZipper: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l64 0 0 16 16 0 32 0 16 0 0-16 48 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM112 96l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zm0 64l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zM80 416l128 0 0-72L176 224l-64 0L80 344l0 72zm48-80l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FileZipper;
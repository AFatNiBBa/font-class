
import { Icon } from "../../index";

/**
 * A component that renders the `file-invoice` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=sharp-thin file-invoice}
 * @preview ![file-invoice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-invoice.svg)
 */
const FileInvoice: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM64 64l0 16 8 0 80 0 8 0 0-16-8 0L72 64l-8 0zm0 64l0 16 8 0 80 0 8 0 0-16-8 0-80 0-8 0zM224 432l0 16 8 0 80 0 8 0 0-16-8 0-80 0-8 0zm80-192l0 96L80 336l0-96 224 0zM80 224l-16 0 0 16 0 96 0 16 16 0 224 0 16 0 0-16 0-96 0-16-16 0L80 224z" />
    </Icon>
);

export default FileInvoice;
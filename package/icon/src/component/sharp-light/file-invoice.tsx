
import { Icon } from "../../index";

/**
 * A component that renders the `file-invoice` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=sharp-light file-invoice}
 * @preview ![file-invoice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-invoice.svg)
 */
const FileInvoice: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 480L32 32l160 0 0 144 0 16 16 0 144 0 0 288L32 480zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM64 64l0 32 16 0 64 0 16 0 0-32-16 0L80 64 64 64zm0 64l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zM224 448l16 0 64 0 16 0 0-32-16 0-64 0-16 0 0 32zm64-112L96 336l0-64 192 0 0 64zM96 240l-32 0 0 32 0 64 0 32 32 0 192 0 32 0 0-32 0-64 0-32-32 0L96 240z" />
    </Icon>
);

export default FileInvoice;

import { Icon } from "../../index";

/**
 * A component that renders the `file-invoice` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=sharp-solid file-invoice}
 * @preview ![file-invoice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-invoice.svg)
 */
const FileInvoice: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM80 64l64 0 16 0 0 32-16 0L80 96 64 96l0-32 16 0zm0 64l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0zm0 96l224 0 16 0 0 16 0 96 0 16-16 0L80 352l-16 0 0-16 0-96 0-16 16 0zm16 96l192 0 0-64L96 256l0 64zm144 96l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FileInvoice;
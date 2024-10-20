
import { Icon } from "../../index";

/**
 * A component that renders the `file-invoice` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=sharp-regular file-invoice}
 * @preview ![file-invoice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-invoice.svg)
 */
const FileInvoice: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464l288 0 0-304-112 0 0-112L48 48l0 416zM48 0L256 0 384 128l0 336 0 48-48 0L48 512 0 512l0-48L0 48 0 0 48 0zM80 96l16 0 80 0 16 0 0 32-16 0-80 0-16 0 0-32zm0 64l16 0 80 0 16 0 0 32-16 0-80 0-16 0 0-32zM192 384l16 0 80 0 16 0 0 32-16 0-80 0-16 0 0-32zM304 224l0 128L80 352l0-128 224 0z" />
    </Icon>
);

export default FileInvoice;
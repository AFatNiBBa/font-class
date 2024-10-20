
import { Icon } from "../../index";

/**
 * A component that renders the `file-invoice` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=regular file-invoice}
 * @preview ![file-invoice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-invoice.svg)
 */
const FileInvoice: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 464l256 0c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm80 48c0-8.8 7.2-16 16-16l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16zM192 400c0-8.8 7.2-16 16-16l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16zM112 224l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default FileInvoice;
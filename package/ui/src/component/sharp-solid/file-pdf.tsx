
import { Icon } from "../../index";

/**
 * A component that renders the `file-pdf` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pdf?s=sharp-solid file-pdf}
 * @preview ![file-pdf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-pdf.svg)
 */
const FilePdf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0zM384 128l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32 0 16-32 0 0-16 0-48 0-80 0-16 16 0zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0-16 0 0-16 0-128 0-16 16 0zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-128l16 0 48 0 16 0 0 32-16 0-32 0 0 32 32 0 16 0 0 32-16 0-32 0 0 48 0 16-32 0 0-16 0-64 0-64 0-16z" />
    </Icon>
);

export default FilePdf;
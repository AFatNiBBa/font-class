
import { Icon } from "../../index";

/**
 * A component that renders the `file-pdf` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pdf?s=sharp-light file-pdf}
 * @preview ![file-pdf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-pdf.svg)
 */
const FilePdf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 192l0 112 32 0 0-152L232 0 32 0 0 0 0 32 0 480l0 32 32 0 80 0 0-32-80 0L32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zM176 352l-16 0 0 16 0 80 0 64 32 0 0-48 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm96-80l-16 0 0 16 0 128 0 16 16 0 32 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-32 0zm32 128l-16 0 0-96 16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16zm80-128l0 16 0 64 0 64 0 16 32 0 0-16 0-48 32 0 16 0 0-32-16 0-32 0 0-32 32 0 16 0 0-32-16 0-48 0-16 0z" />
    </Icon>
);

export default FilePdf;
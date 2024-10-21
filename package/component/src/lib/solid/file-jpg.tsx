
import { Icon } from "../../index";

/**
 * A component that renders the `file-jpg` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-jpg?s=solid file-jpg}
 * @preview ![file-jpg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-jpg.svg)
 */
const FileJpg: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM208 512c-26.5 0-48-21.5-48-48l0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 26.5-21.5 48-48 48zm96-160l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm80-40c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-8c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 24c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-80z" />
    </Icon>
);

export default FileJpg;
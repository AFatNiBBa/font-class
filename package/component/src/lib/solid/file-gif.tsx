
import { Icon } from "../../index";

/**
 * A component that renders the `file-gif` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-gif?s=solid file-gif}
 * @preview ![file-gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-gif.svg)
 */
const FileGif: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-144 0c-35.3 0-64 28.7-64 64l0 144L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM224 392c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-8c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 24c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-80zm160-24l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16s16 7.2 16 16zm48-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default FileGif;
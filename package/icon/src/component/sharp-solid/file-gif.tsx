
import { Icon } from "../../index";

/**
 * A component that renders the `file-gif` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-gif?s=sharp-solid file-gif}
 * @preview ![file-gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-gif.svg)
 */
const FileGif: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 144-208 0 0 208L0 512 0 0zM384 128l-128 0L256 0 384 128zM224 392c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 16-32 0 0-16c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-8-16 0 0-32 16 0 16 0 16 0 0 16 0 24c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-80zm160-24l0 128 0 16-32 0 0-16 0-128 0-16 32 0 0 16zm48-16l48 0 16 0 0 32-16 0-32 0 0 32 32 0 16 0 0 32-16 0-32 0 0 48 0 16-32 0 0-16 0-64 0-64 0-16 16 0z" />
    </Icon>
);

export default FileGif;
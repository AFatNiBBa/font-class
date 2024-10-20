
import { Icon } from "../../index";

/**
 * A component that renders the `file-vector` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-vector?s=sharp-thin file-vector}
 * @preview ![file-vector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-vector.svg)
 */
const FileVector: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM96 240l32 0 0 8 0 16 0 8-8 0-16 0-8 0 0-32zm8 48l0 96-8 0-16 0 0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-8 96 0 0 8 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-8 0 0-96 8 0 16 0 0-16 0-32 0-16-16 0-32 0-16 0 0 16 0 8-96 0 0-8 0-16-16 0-32 0-16 0 0 16 0 32 0 16 16 0 8 0zm160 0l0 96-8 0-16 0 0 16 0 8-96 0 0-8 0-16-16 0-8 0 0-96 8 0 16 0 0-16 0-8 96 0 0 8 0 16 16 0 8 0zm-8 144l0-8 0-16 0-8 8 0 16 0 8 0 0 32-32 0zm-128-8l0 8-32 0 0-32 8 0 16 0 8 0 0 8 0 16zM288 272l-8 0-16 0-8 0 0-8 0-16 0-8 32 0 0 32z" />
    </Icon>
);

export default FileVector;

import { Icon } from "../../index";

/**
 * A component that renders the `file-lines` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lines?s=sharp-thin file-lines}
 * @preview ![file-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-lines.svg)
 */
const FileLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM104 256l-8 0 0 16 8 0 176 0 8 0 0-16-8 0-176 0zm0 64l-8 0 0 16 8 0 176 0 8 0 0-16-8 0-176 0zm0 64l-8 0 0 16 8 0 176 0 8 0 0-16-8 0-176 0z" />
    </Icon>
);

export default FileLines;

import { Icon } from "../../index";

/**
 * A component that renders the `file-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=sharp-thin file-check}
 * @preview ![file-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-check.svg)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zm53.7 280.3l5.7-5.7L272 263.4l-5.7 5.7-101 101-47.7-47.7-5.7-5.7L100.7 328l5.7 5.7L159.7 387l5.7 5.7L171 387 277.7 280.3z" />
    </Icon>
);

export default FileCheck;
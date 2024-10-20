
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-up?s=sharp-thin file-arrow-up}
 * @preview ![file-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-arrow-up.svg)
 */
const FileArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496 16 16zm208 6.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM200 440l0-188.7 74.3 74.3 5.7 5.7L291.3 320l-5.7-5.7-88-88-5.7-5.7-5.7 5.7-88 88L92.7 320 104 331.3l5.7-5.7L184 251.3 184 440l0 8 16 0 0-8z" />
    </Icon>
);

export default FileArrowUp;
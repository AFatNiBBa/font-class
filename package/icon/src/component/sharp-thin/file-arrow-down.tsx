
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=sharp-thin file-arrow-down}
 * @preview ![file-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-arrow-down.svg)
 */
const FileArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496 16 16zm208 6.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM200 232l0-8-16 0 0 8 0 188.7-74.3-74.3-5.7-5.7L92.7 352l5.7 5.7 88 88 5.7 5.7 5.7-5.7 88-88 5.7-5.7L280 340.7l-5.7 5.7L200 420.7 200 232z" />
    </Icon>
);

export default FileArrowDown;
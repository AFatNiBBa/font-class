
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=sharp-light file-arrow-down}
 * @preview ![file-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-arrow-down.svg)
 */
const FileArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM208 240l0-16-32 0 0 16 0 121.4-52.7-52.7L112 297.4 89.4 320l11.3 11.3 80 80L192 422.6l11.3-11.3 80-80L294.6 320 272 297.4l-11.3 11.3L208 361.4 208 240z" />
    </Icon>
);

export default FileArrowDown;
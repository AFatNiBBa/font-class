
import { Icon } from "../../index";

/**
 * A component that renders the `file-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xmark?s=sharp-light file-xmark}
 * @preview ![file-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-xmark.svg)
 */
const FileXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM127.4 248.8l-22.6 22.6 11.3 11.3L169.4 336l-53.3 53.3-11.3 11.3 22.6 22.6 11.3-11.3L192 358.6l53.3 53.3 11.3 11.3 22.6-22.6-11.3-11.3L214.6 336l53.3-53.3 11.3-11.3-22.6-22.6-11.3 11.3L192 313.4l-53.3-53.3-11.3-11.3z" />
    </Icon>
);

export default FileXmark;
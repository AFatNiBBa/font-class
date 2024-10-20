
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-minus?s=sharp-thin file-circle-minus}
 * @preview ![file-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-circle-minus.svg)
 */
const FileCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 496l295.2 0c6.1 5.8 12.7 11.1 19.6 16L16 512 0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 38.6c-5.4 1.5-10.8 3.3-16 5.4l0-28-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zM432 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm80 152l-8 0-144 0-8 0 0-16 8 0 144 0 8 0 0 16z" />
    </Icon>
);

export default FileCircleMinus;
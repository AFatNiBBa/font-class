
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-plus?s=sharp-thin file-circle-plus}
 * @preview ![file-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-circle-plus.svg)
 */
const FileCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 496l295.2 0c6.1 5.8 12.7 11.1 19.6 16L16 512 0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 38.6c-5.4 1.5-10.8 3.3-16 5.4l0-28-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm152-72l0 64 64 0 8 0 0 16-8 0-64 0 0 64 0 8-16 0 0-8 0-64-64 0-8 0 0-16 8 0 64 0 0-64 0-8 16 0 0 8z" />
    </Icon>
);

export default FileCirclePlus;
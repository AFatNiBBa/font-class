
import { Icon } from "../../index";

/**
 * A component that renders the `file-shield` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-shield?s=sharp-thin file-shield}
 * @preview ![file-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-shield.svg)
 */
const FileShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 496l326.2 0c6.3 5.7 12.9 11 19.9 16L16 512 0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 48.3-16 6.2 0-38.5-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zM560 290.7L440 244.3l0 247.6c79.1-33.5 120-119 120-195.9l0-5.3zm-256 0l0 5.3c0 76.9 40.9 162.4 120 195.9l0-247.6L304 290.7zM432 512c-96-32-144-130.2-144-216l0-16.2L432 224l144 55.8 0 16.2c0 85.8-48 184-144 216z" />
    </Icon>
);

export default FileShield;
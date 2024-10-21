
import { Icon } from "../../index";

/**
 * A component that renders the `file-zip` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zip?s=sharp-thin file-zip}
 * @preview ![file-zip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-zip.svg)
 */
const FileZip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 496l160 0 0 16L16 512 0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 144-16 0 0-128-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zM240 368l64 0 8 0 0 8 0 8 0 2.1-1.1 1.8L249.2 496l54.8 0 8 0 0 16-8 0-64 0-8 0 0-8 0-8 0-2.1 1.1-1.8 61.7-108L240 384l-8 0 0-16 8 0zm136 8l0 128 0 8-16 0 0-8 0-128 0-8 16 0 0 8zm48-8l8 0 24 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0 40 0 8-16 0 0-8 0-48 0-80 0-8zm16 80l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0 64z" />
    </Icon>
);

export default FileZip;
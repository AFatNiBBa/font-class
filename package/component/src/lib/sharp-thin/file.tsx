
import { Icon } from "../../index";

/**
 * A component that renders the `file` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=sharp-thin file}
 * @preview ![file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file.svg)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 496l0-320-152 0-8 0 0-8 0-152L16 16l0 480 352 0zm-6.6-336L224 22.6 224 160l137.4 0zM16 0L224 0 384 160l0 336 0 16-16 0L16 512 0 512l0-16L0 16 0 0 16 0z" />
    </Icon>
);

export default File;
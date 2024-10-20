
import { Icon } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=sharp-regular file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 464l-288 0 0-96-48 0 0 96 0 48 48 0 288 0 48 0 0-48 0-96-48 0 0 96zm0-304l0 96 48 0 0-128L384 0 176 0 128 0l0 48 0 208 48 0 0-208 176 0 0 112 112 0zM56 288l-24 0 0 48 24 0 112 0 24 0 0-48-24 0L56 288zm224 0l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0zm192 0l-24 0 0 48 24 0 112 0 24 0 0-48-24 0-112 0z" />
    </Icon>
);

export default FileDashedLine;
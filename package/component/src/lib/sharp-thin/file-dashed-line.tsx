
import { Icon } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=sharp-thin file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 496l-352 0 0-144-16 0 0 144 0 16 16 0 352 0 16 0 0-16 0-144-16 0 0 144zm0-320l0 64 16 0 0-80L352 0 144 0 128 0l0 16 0 224 16 0 0-224 192 0 0 152 0 8 8 0 152 0zm-6.6-16L352 160l0-137.4L489.4 160zM40 288l-8 0 0 16 8 0 144 0 8 0 0-16-8 0L40 288zm224 0l-8 0 0 16 8 0 112 0 8 0 0-16-8 0-112 0zm192 0l-8 0 0 16 8 0 144 0 8 0 0-16-8 0-144 0z" />
    </Icon>
);

export default FileDashedLine;
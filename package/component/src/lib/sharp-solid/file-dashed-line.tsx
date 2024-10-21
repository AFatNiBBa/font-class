
import { Icon } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=sharp-solid file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0L352 0l0 160 160 0 0 96-384 0L128 0zm0 368l384 0 0 144-384 0 0-144zM512 128l-128 0L384 0 512 128zM56 288l112 0 24 0 0 48-24 0L56 336l-24 0 0-48 24 0zm224 0l80 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0zm192 0l112 0 24 0 0 48-24 0-112 0-24 0 0-48 24 0z" />
    </Icon>
);

export default FileDashedLine;
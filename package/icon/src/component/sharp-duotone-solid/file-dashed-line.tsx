
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=sharp-duotone-solid file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0l0 256 384 0 0-96-160 0L352 0 128 0zm0 368l0 144 384 0 0-144-384 0zM384 0l0 128 128 0L384 0z" />
        <path d="M32 288l24 0 112 0 24 0 0 48-24 0L56 336l-24 0 0-48zm224 0l24 0 80 0 24 0 0 48-24 0-80 0-24 0 0-48zm192 0l24 0 112 0 24 0 0 48-24 0-112 0-24 0 0-48z" />
    </Icon>
);

export default FileDashedLine;
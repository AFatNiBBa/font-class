
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-minus?s=sharp-duotone-solid file-circle-minus}
 * @preview ![file-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-circle-minus.svg)
 */
const FileCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0z" />
        <path d="M384 160l-160 0L224 0 384 160zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm224 16l0-32-16 0-128 0-16 0 0 32 16 0 128 0 16 0z" />
    </Icon>
);

export default FileCircleMinus;
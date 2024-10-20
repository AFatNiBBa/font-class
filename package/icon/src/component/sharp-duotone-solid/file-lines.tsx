
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lines?s=sharp-duotone-solid file-lines}
 * @preview ![file-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-lines.svg)
 */
const FileLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM96 256l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0zm0 64l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0zm0 64l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0z" />
        <path d="M384 160L224 0l0 160 160 0zM112 256l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0zm0 64l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0zm0 64l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default FileLines;
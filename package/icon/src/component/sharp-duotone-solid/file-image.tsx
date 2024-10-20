
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=sharp-duotone-solid file-image}
 * @preview ![file-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-image.svg)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 160l0 32 64 0 64 0 128 0 0-32L224 288l-63.5 84.7L128 328 64 416z" />
        <path d="M384 160l-160 0L224 0 384 160zM320 416l0 32-128 0-64 0-64 0 0-32 64-88 32.5 44.7L224 288l96 128z" />
    </Icon>
);

export default FileImage;
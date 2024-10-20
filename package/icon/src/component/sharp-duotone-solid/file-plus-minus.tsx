
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-plus-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-plus-minus?s=sharp-duotone-solid file-plus-minus}
 * @preview ![file-plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-plus-minus.svg)
 */
const FilePlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM112 256l0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16-32 0 0 16 0 48-48 0-16 0zm0 128l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0z" />
        <path d="M384 160L224 0l0 160 160 0zM208 208l0-16-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48zM128 384l-16 0 0 32 16 0 128 0 16 0 0-32-16 0-128 0z" />
    </Icon>
);

export default FilePlusMinus;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-binary` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-binary?s=sharp-duotone-solid file-binary}
 * @preview ![file-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-binary.svg)
 */
const FileBinary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM64 256l0 16 0 128 0 16 16 0 96 0 16 0 0-16 0-128 0-16-16 0-96 0-16 0zm32 32l64 0 0 96-64 0 0-96zm128-32l0 32 16 0 16 0 0 96-16 0-16 0 0 32 16 0 32 0 32 0 16 0 0-32-16 0-16 0 0-112 0-16-16 0-32 0-16 0z" />
        <path d="M384 160L224 0l0 160 160 0zM80 256l-16 0 0 16 0 128 0 16 16 0 96 0 16 0 0-16 0-128 0-16-16 0-96 0zM96 384l0-96 64 0 0 96-64 0zM240 256l-16 0 0 32 16 0 16 0 0 96-16 0-16 0 0 32 16 0 32 0 32 0 16 0 0-32-16 0-16 0 0-112 0-16-16 0-32 0z" />
    </Icon>
);

export default FileBinary;
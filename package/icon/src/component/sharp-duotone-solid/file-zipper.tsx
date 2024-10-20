
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-zipper` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zipper?s=sharp-duotone-solid file-zipper}
 * @preview ![file-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-zipper.svg)
 */
const FileZipper: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 344l0 72 128 0 0-72L160 224l-64 0L64 344zM96 32l0 32 16 0 32 0 16 0 0-32-16 0-32 0L96 32zm0 64l0 32 16 0 32 0 16 0 0-32-16 0-32 0L96 96zm0 64l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0z" />
        <path d="M384 160L224 0l0 160 160 0zM96 32l0 32 16 0 32 0 16 0 0-32-16 0-32 0L96 32zm0 64l0 32 16 0 32 0 16 0 0-32-16 0-32 0L96 96zm0 64l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zM64 416l128 0 0-72L160 224l-64 0L64 344l0 72zm48-80l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FileZipper;
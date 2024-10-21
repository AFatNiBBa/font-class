
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-vector` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-vector?s=sharp-duotone-solid file-vector}
 * @preview ![file-vector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-vector.svg)
 */
const FileVector: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 192l0 64 32 0 0 128-32 0 0 64 64 0 0-32 128 0 0 32 64 0 0-64-32 0 0-128 32 0 0-64-64 0 0 32-128 0 0-32-64 0zm64 64l128 0 0 128-128 0 0-128z" />
        <path d="M384 160l-160 0L224 0 384 160zM128 192l0 32 128 0 0-32 64 0 0 64-32 0 0 128 32 0 0 64-64 0 0-32-128 0 0 32-64 0 0-64 32 0 0-128-32 0 0-64 64 0zM256 384l0-128-128 0 0 128 128 0z" />
    </Icon>
);

export default FileVector;
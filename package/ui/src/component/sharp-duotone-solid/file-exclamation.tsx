
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-exclamation?s=sharp-duotone-solid file-exclamation}
 * @preview ![file-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-exclamation.svg)
 */
const FileExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM168 192l0 24 0 112 0 24 48 0 0-24 0-112 0-24-48 0zm0 192l0 48 48 0 0-48-48 0z" />
        <path d="M384 160L224 0l0 160 160 0zM216 192l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM168 384l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default FileExclamation;
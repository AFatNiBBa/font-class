
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-exclamation?s=sharp-duotone-solid file-circle-exclamation}
 * @preview ![file-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-circle-exclamation.svg)
 */
const FileCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-64l-32 0 0-32 32 0 0 32zm0-176l0 16 0 80 0 16-32 0 0-16 0-80 0-16 32 0z" />
    </Icon>
);

export default FileCircleExclamation;
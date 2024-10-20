
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-export` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=sharp-duotone-solid file-export}
 * @preview ![file-export](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-export.svg)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 128-168 0-24 0 0 48 24 0 168 0 0 176L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zm105 55l-17-17L438.1 232l17 17 39 39L216 288l-24 0 0 48 24 0 278.1 0-39 39-17 17L472 425.9l17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default FileExport;
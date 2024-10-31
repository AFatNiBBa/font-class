
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-import` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=sharp-duotone-solid file-import}
 * @preview ![file-import](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-import.svg)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0L352 0l0 160 160 0 0 352-384 0 0-176 174.1 0-39 39-17 17L280 425.9l17-17 80-80 17-17-17-17-80-80-17-17L246.1 232l17 17 39 39L128 288 128 0z" />
        <path d="M512 160L352 0l0 160 160 0zM297 215l-17-17L246.1 232l17 17 39 39L24 288 0 288l0 48 24 0 278.1 0-39 39-17 17L280 425.9l17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default FileImport;
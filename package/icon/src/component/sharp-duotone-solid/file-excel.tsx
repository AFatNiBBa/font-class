
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-excel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-excel?s=sharp-duotone-solid file-excel}
 * @preview ![file-excel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-excel.svg)
 */
const FileExcel: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM97.7 240l65.9 104L97.7 448l56.8 0L192 388.9 229.5 448l56.8 0L220.4 344l65.9-104-56.8 0L192 299.1 154.5 240l-56.8 0z" />
        <path d="M384 160L224 0l0 160 160 0zM97.7 240l65.9 104L97.7 448l56.8 0L192 388.9 229.5 448l56.8 0L220.4 344l65.9-104-56.8 0L192 299.1 154.5 240l-56.8 0z" />
    </Icon>
);

export default FileExcel;
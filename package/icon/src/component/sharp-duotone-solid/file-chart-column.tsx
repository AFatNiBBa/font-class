
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-chart-column` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-column?s=sharp-duotone-solid file-chart-column}
 * @preview ![file-chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-chart-column.svg)
 */
const FileChartColumn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM80 352l0 24 0 48 0 24 48 0 0-24 0-48 0-24-48 0zm88-128l0 24 0 176 0 24 48 0 0-24 0-176 0-24-48 0zm88 64l0 24 0 112 0 24 48 0 0-24 0-112 0-24-48 0z" />
        <path d="M384 160L224 0l0 160 160 0zM216 248l0-24-48 0 0 24 0 176 0 24 48 0 0-24 0-176zm88 64l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zM128 376l0-24-48 0 0 24 0 48 0 24 48 0 0-24 0-48z" />
    </Icon>
);

export default FileChartColumn;
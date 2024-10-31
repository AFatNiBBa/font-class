
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-chart-pie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-pie?s=sharp-duotone-solid file-chart-pie}
 * @preview ![file-chart-pie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-chart-pie.svg)
 */
const FileChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 328c0 66.3 53.7 120 120 120c58.1 0 106.5-41.2 117.6-96L160 352l0-141.6C105.2 221.5 64 269.9 64 328zM192 200l0 120 120 0c0-66.3-53.7-120-120-120z" />
        <path d="M384 160l-160 0L224 0 384 160zM64 328c0-58.1 41.2-106.5 96-117.6L160 352l141.6 0c-11.1 54.8-59.5 96-117.6 96c-66.3 0-120-53.7-120-120z" />
    </Icon>
);

export default FileChartPie;
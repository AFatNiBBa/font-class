
import { Icon } from "../../index";

/**
 * A component that renders the `file-chart-pie` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-pie?s=sharp-solid file-chart-pie}
 * @preview ![file-chart-pie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-chart-pie.svg)
 */
const FileChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zm56 320l-120 0 0-120c66.3 0 120 53.7 120 120zM160 210.4L160 352l141.6 0c-11.1 54.8-59.5 96-117.6 96c-66.3 0-120-53.7-120-120c0-58.1 41.2-106.5 96-117.6z" />
    </Icon>
);

export default FileChartPie;
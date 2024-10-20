
import { Icon } from "../../index";

/**
 * A component that renders the `file-chart-column` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-column?s=sharp-regular file-chart-column}
 * @preview ![file-chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-chart-column.svg)
 */
const FileChartColumn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM216 280l0-24-48 0 0 24 0 128 0 24 48 0 0-24 0-128zm88 32l0-24-48 0 0 24 0 96 0 24 48 0 0-24 0-96zM128 344l0-24-48 0 0 24 0 64 0 24 48 0 0-24 0-64z" />
    </Icon>
);

export default FileChartColumn;
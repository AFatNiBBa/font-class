
import { Icon } from "../../index";

/**
 * A component that renders the `chart-column` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-column?s=sharp-solid chart-column}
 * @preview ![chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-column.svg)
 */
const ChartColumn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l0 32 0 352 416 0 32 0 0 64-32 0L32 480 0 480l0-32L0 64 0 32l64 0zM192 224l0 32 0 64 0 32-64 0 0-32 0-64 0-32 64 0zm96-64l0 160 0 32-64 0 0-32 0-160 0-32 64 0 0 32zm96 32l0 32 0 96 0 32-64 0 0-32 0-96 0-32 64 0zm96-96l0 224 0 32-64 0 0-32 0-224 0-32 64 0 0 32z" />
    </Icon>
);

export default ChartColumn;
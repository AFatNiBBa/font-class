
import { Icon } from "../../index";

/**
 * A component that renders the `chart-column` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-column?s=sharp-light chart-column}
 * @preview ![chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-column.svg)
 */
const ChartColumn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l0 16 0 400 464 0 16 0 0 32-16 0L16 480 0 480l0-16L0 48 0 32l32 0zM160 256l0 16 0 96 0 16-32 0 0-16 0-96 0-16 32 0zm96-112l0 224 0 16-32 0 0-16 0-224 0-16 32 0 0 16zm96 48l0 16 0 160 0 16-32 0 0-16 0-160 0-16 32 0zm96-80l0 256 0 16-32 0 0-16 0-256 0-16 32 0 0 16z" />
    </Icon>
);

export default ChartColumn;
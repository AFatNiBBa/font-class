
import { Icon } from "../../index";

/**
 * A component that renders the `chart-column` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-column?s=regular chart-column}
 * @preview ![chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-column.svg)
 */
const ChartColumn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32c13.3 0 24 10.7 24 24l0 352c0 13.3 10.7 24 24 24l416 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L72 480c-39.8 0-72-32.2-72-72L0 56C0 42.7 10.7 32 24 32zM168 224c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24zm120-72l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24s24 10.7 24 24zm72 40c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM480 88l0 240c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-240c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ChartColumn;
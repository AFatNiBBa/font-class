
import { Icon } from "../../index";

/**
 * A component that renders the `chart-column` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-column?s=light chart-column}
 * @preview ![chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chart-column.svg)
 */
const ChartColumn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32c8.8 0 16 7.2 16 16l0 352c0 26.5 21.5 48 48 48l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 480c-44.2 0-80-35.8-80-80L0 48c0-8.8 7.2-16 16-16zM144 256c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zM256 144l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 48c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16zm112-80l0 256c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default ChartColumn;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-column` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-column?s=sharp-duotone-solid chart-column}
 * @preview ![chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-column.svg)
 */
const ChartColumn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M480 96l0-32-64 0 0 32 0 224 0 32 64 0 0-32 0-224zM288 160l0-32-64 0 0 32 0 160 0 32 64 0 0-32 0-160zm-96 96l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64zm192-64l-64 0 0 32 0 96 0 32 64 0 0-32 0-96 0-32z" />
    </Icon>
);

export default ChartColumn;
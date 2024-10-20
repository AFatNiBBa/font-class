
import { Icon } from "../../index";

/**
 * A component that renders the `chart-scatter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter?s=regular chart-scatter}
 * @preview ![chart-scatter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-scatter.svg)
 */
const ChartScatter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56L0 408c0 39.8 32.2 72 72 72l416 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 432c-13.3 0-24-10.7-24-24L48 56zM192 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64-224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM160 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default ChartScatter;
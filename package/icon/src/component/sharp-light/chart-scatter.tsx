
import { Icon } from "../../index";

/**
 * A component that renders the `chart-scatter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter?s=sharp-light chart-scatter}
 * @preview ![chart-scatter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-scatter.svg)
 */
const ChartScatter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-32-16 0L32 448 32 48zm184 88l-48 0 0 48 48 0 0-48zM136 296l0 48 48 0 0-48-48 0zm176-64l-48 0 0 48 48 0 0-48zm48 64l0 48 48 0 0-48-48 0zm80-192l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default ChartScatter;
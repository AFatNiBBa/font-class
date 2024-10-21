
import { Icon } from "../../index";

/**
 * A component that renders the `chart-scatter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter?s=sharp-regular chart-scatter}
 * @preview ![chart-scatter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-scatter.svg)
 */
const ChartScatter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56l0-24L0 32 0 56 0 456l0 24 24 0 464 0 24 0 0-48-24 0L48 432 48 56zm176 72l-64 0 0 64 64 0 0-64zM192 288l-64 0 0 64 64 0 0-64zm128-64l-64 0 0 64 64 0 0-64zm32 128l64 0 0-64-64 0 0 64zM448 96l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default ChartScatter;
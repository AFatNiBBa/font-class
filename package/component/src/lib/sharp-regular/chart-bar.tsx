
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=sharp-regular chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 32l0 24 0 376 440 0 24 0 0 48-24 0L24 480 0 480l0-24L0 56 0 32l48 0zm80 80l24 0 208 0 24 0 0 48-24 0-208 0-24 0 0-48zm24 96l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0zm0 96l272 0 24 0 0 48-24 0-272 0-24 0 0-48 24 0z" />
    </Icon>
);

export default ChartBar;
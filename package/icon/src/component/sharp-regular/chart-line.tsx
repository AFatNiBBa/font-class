
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=sharp-regular chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56l0-24L0 32 0 56 0 456l0 24 24 0 464 0 24 0 0-48-24 0L48 432 48 56zM473 169l17-17L456 118.1l-17 17-119 119-79-79-17-17-17 17-96 96-17 17L128 321.9l17-17 79-79 79 79 17 17 17-17L473 169z" />
    </Icon>
);

export default ChartLine;
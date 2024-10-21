
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=regular chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56L0 408c0 39.8 32.2 72 72 72l416 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 432c-13.3 0-24-10.7-24-24L48 56zM473 169c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119-79-79c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7l-96 96c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l79-79 79 79c9.4 9.4 24.6 9.4 33.9 0L473 169z" />
    </Icon>
);

export default ChartLine;
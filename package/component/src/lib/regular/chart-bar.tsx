
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=regular chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32c13.3 0 24 10.7 24 24l0 352c0 13.3 10.7 24 24 24l416 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L72 480c-39.8 0-72-32.2-72-72L0 56C0 42.7 10.7 32 24 32zM128 136c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24zm24 72l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default ChartBar;
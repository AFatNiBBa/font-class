
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-chart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-chart?s=regular magnifying-glass-chart}
 * @preview ![magnifying-glass-chart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/magnifying-glass-chart.svg)
 */
const MagnifyingGlassChart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L371.1 337.1C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM104 216l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96l0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default MagnifyingGlassChart;
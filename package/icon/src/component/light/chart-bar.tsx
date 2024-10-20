
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=light chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32c8.8 0 16 7.2 16 16l0 352c0 26.5 21.5 48 48 48l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 480c-44.2 0-80-35.8-80-80L0 48c0-8.8 7.2-16 16-16zM128 144c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zm16 80l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default ChartBar;
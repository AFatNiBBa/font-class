
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=sharp-light chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l0 16 0 400 464 0 16 0 0 32-16 0L16 480 0 480l0-16L0 48 0 32l32 0zm96 96l16 0 224 0 16 0 0 32-16 0-224 0-16 0 0-32zm16 96l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 96l288 0 16 0 0 32-16 0-288 0-16 0 0-32 16 0z" />
    </Icon>
);

export default ChartBar;
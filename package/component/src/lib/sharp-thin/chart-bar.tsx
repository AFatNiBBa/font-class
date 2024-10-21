
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=sharp-thin chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40l0-8L0 32l0 8L0 472l0 8 8 0 496 0 8 0 0-16-8 0L16 464 16 40zm96 88l16 0 192 0 16 0 0 32-16 0-192 0-16 0 0-32zm208 48l16 0 16 0 0-16 0-32 0-16-16 0-16 0-192 0-16 0-16 0 0 16 0 32 0 16 16 0 16 0 192 0zM112 224l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 96l16 0 256 0 16 0 0 32-16 0-256 0-16 0 0-32zm16-112l-16 0-16 0 0 16 0 32 0 16 16 0 16 0 128 0 16 0 16 0 0-16 0-32 0-16-16 0-16 0-128 0zm0 96l-16 0-16 0 0 16 0 32 0 16 16 0 16 0 256 0 16 0 16 0 0-16 0-32 0-16-16 0-16 0-256 0z" />
    </Icon>
);

export default ChartBar;
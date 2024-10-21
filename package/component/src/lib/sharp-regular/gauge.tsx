
import { Icon } from "../../index";

/**
 * A component that renders the `gauge` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge?s=sharp-regular gauge}
 * @preview ![gauge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gauge.svg)
 */
const Gauge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm56-160c0-22.3-13.1-41.6-32-50.6L280 120l0-24-48 0 0 24 0 181.4c-18.9 9-32 28.3-32 50.6c0 30.9 25.1 56 56 56s56-25.1 56-56zM160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Gauge;

import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=sharp-solid clock}
 * @preview ![clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock.svg)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136 0 12.8 10.7 7.1 96 64 20 13.3 26.6-39.9-20-13.3L280 243.2 280 120l0-24-48 0 0 24z" />
    </Icon>
);

export default Clock;
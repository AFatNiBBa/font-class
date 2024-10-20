
import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=sharp-regular clock}
 * @preview ![clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock.svg)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136 0 12.8 10.7 7.1 96 64 20 13.3 26.6-39.9-20-13.3L280 243.2 280 120l0-24-48 0 0 24z" />
    </Icon>
);

export default Clock;
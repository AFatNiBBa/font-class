
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-high` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-high?s=sharp-regular temperature-high}
 * @preview ![temperature-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/temperature-high.svg)
 */
const TemperatureHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM416 0a96 96 0 1 1 0 192A96 96 0 1 1 416 0zM160 96l0 16 0 210.8c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L128 112l0-16 32 0zM80 294.5L69.3 307.7C56 324.2 48 345.1 48 368c0 53 43 96 96 96s96-43 96-96c0-22.9-8-43.8-21.3-60.3L208 294.5l0-17L208 48 80 48l0 229.5 0 17zM208 0l48 0 0 48 0 229.5c20 24.7 32 56.2 32 90.5c0 79.5-64.5 144-144 144S0 447.6 0 368c0-34.3 12-65.8 32-90.5L32 48 32 0 80 0 208 0z" />
    </Icon>
);

export default TemperatureHigh;
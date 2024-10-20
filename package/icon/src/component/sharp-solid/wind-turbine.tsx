
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=sharp-solid wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M340.8 425L317.1 202.8 415.4 2 234.8 133.7l-223 15.2 204.4 90.6L340.8 425zM288 403.8l-64-95.2L224 464l-72 0-24 0 0 48 24 0 208 0 24 0 0-48-24 0-72 0 0-60.2zM256 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default WindTurbine;
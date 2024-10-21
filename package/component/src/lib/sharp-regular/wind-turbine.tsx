
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=sharp-regular wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M340.8 425L317.1 202.8 415.4 2 234.8 133.7l-223 15.2 204.4 90.6L340.8 425zM232 192a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm48 199.9l-48-71.4L232 464l-80 0-24 0 0 48 24 0 104 0 104 0 24 0 0-48-24 0-80 0 0-72.1z" />
    </Icon>
);

export default WindTurbine;
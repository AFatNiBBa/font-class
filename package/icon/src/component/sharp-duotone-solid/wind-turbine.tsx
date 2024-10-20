
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=sharp-duotone-solid wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 464l0 48 24 0 208 0 24 0 0-48-24 0-72 0 0-117.6-64-95.2L224 464l-72 0-24 0z" />
        <path d="M317.1 202.8L340.8 425 216.1 239.5 11.8 148.9l223-15.2L415.4 2 317.1 202.8zM256 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default WindTurbine;
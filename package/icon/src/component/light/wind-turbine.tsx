
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=light wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M314.5 436c17.2 27.9 60.2 12.2 55.4-20.2L343.2 235 430.2 74.2c15.6-28.8-19.5-58.3-45.2-37.9L241.7 149.8 59 154.9c-32.7 .9-40.7 46-10.2 58.1l170 67.3L256 341l0 140.9-90.4 0c-8.3 0-15.1 6.7-15.1 15.1s6.7 15.1 15.1 15.1l105.4 0 105.4 0c8.3 0 15.1-6.7 15.1-15.1s-6.7-15.1-15.1-15.1l-90.4 0 0-92L314.5 436zm-1-196.6l26.7 180.8L244.3 264.5c-3.4-5.5-8.5-9.8-14.6-12.2L59.8 185l182.7-5.1c6.5-.2 12.8-2.5 17.9-6.5L403.7 59.8 316.7 220.6c-3.1 5.7-4.2 12.3-3.3 18.7zm-27.3-13.5a15.1 15.1 0 1 0 -30.1 0 15.1 15.1 0 1 0 30.1 0z" />
    </Icon>
);

export default WindTurbine;
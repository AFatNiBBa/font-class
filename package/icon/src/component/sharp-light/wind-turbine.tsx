
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=sharp-light wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M318 378.4L229.4 246.6l-2.6-3.8-4.2-1.9L77.4 176.5l158.5-10.8 4.6-.3 3.7-2.7L372.6 69 302.7 211.7l-2 4.1 .5 4.6 16.9 158zm9.5 71.5l29.2-10.6L333.5 221.7 429.8 25.1 406 5.1l-176.9 129L10.7 149 5.3 179.6l200.2 88.7L240 319.7l0 8.3 0 152-96 0-16 0 0 32 16 0 112 0 112 0 16 0 0-32-16 0-96 0 0-112.7L327.5 450zM272 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default WindTurbine;
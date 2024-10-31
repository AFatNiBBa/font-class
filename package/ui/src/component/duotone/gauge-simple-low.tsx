
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-simple-low` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-low?s=duotone gauge-simple-low}
 * @preview ![gauge-simple-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gauge-simple-low.svg)
 */
const GaugeSimpleLow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 152c0-8.7 4.7-17 12.9-21.3c11.8-6.1 26.3-1.5 32.4 10.2c25.5 49.1 51.1 98.2 76.6 147.4c2-.2 4-.3 6.1-.3c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.9 5.8-30.4 15.3-41.6L130.7 163.1c-1.8-3.5-2.7-7.3-2.7-11.1z" />
        <path d="M173.3 140.9c-6.1-11.8-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4l76.6 147.4C197.8 321.6 192 336.1 192 352c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-2.1 0-4.1 .1-6.1 .3L173.3 140.9z" />
    </Icon>
);

export default GaugeSimpleLow;
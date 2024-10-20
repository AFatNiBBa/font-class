
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-min` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-min?s=sharp-solid gauge-simple-min}
 * @preview ![gauge-simple-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gauge-simple-min.svg)
 */
const GaugeSimpleMin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-35.3-28.7-64-64-64c-14.1 0-27.2 4.6-37.8 12.4L100.6 227.6 80.2 215 55 255.8l20.4 12.6 117.5 72.8c-.6 3.5-.9 7.1-.9 10.8c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default GaugeSimpleMin;
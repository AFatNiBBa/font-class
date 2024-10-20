
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-max` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-max?s=sharp-solid gauge-max}
 * @preview ![gauge-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gauge-max.svg)
 */
const GaugeMax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-3.7-.3-7.3-.9-10.8l117.5-72.8L457 255.8 431.8 215l-20.4 12.6L293.8 300.4C283.2 292.6 270.1 288 256 288c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default GaugeMax;
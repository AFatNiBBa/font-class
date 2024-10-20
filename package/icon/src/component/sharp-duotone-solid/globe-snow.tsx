
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe-snow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-snow?s=sharp-duotone-solid globe-snow}
 * @preview ![globe-snow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/globe-snow.svg)
 */
const GlobeSnow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 71.4 33.4 135 85.4 176L192 400l0-48-80 0 0-16 80-80-48 0 0-16 80-80 80 80 0 16-48 0 80 80 0 16-80 0 0 48 106.6 0c52-41 85.4-104.6 85.4-176C448 100.3 347.7 0 224 0S0 100.3 0 224zm96-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM256 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm96 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M304 256l-48 0 80 80 0 16-80 0 0 48 106.6 0L448 512 0 512 85.4 400 192 400l0-48-80 0 0-16 80-80-48 0 0-16 80-80 80 80 0 16z" />
    </Icon>
);

export default GlobeSnow;
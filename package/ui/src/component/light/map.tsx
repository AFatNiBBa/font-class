
import { Icon } from "../../index";

/**
 * A component that renders the `map` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=light map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M170.1 33.1c3.3-1.3 6.9-1.5 10.3-.5L399.1 95.1l144-57.6c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3l-155 62c-3.3 1.3-6.9 1.5-10.3 .5L176.9 416.9l-144 57.6C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3l155-62zM32 122.8l0 317.5 128-51.2 0-317.5L32 122.8zm352 320l0-318.7L192 69.2l0 318.7 192 54.9zm32-2.4l128-51.2 0-317.5L416 122.8l0 317.5z" />
    </Icon>
);

export default Map;
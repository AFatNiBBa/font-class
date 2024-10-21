
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-instrument` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=sharp-thin triangle-instrument}
 * @preview ![triangle-instrument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/triangle-instrument.svg)
 */
const TriangleInstrument: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M296 8l0-8L280 0l0 8 0 37.3-1.3 2.2L9.6 496 0 512l18.7 0 538.7 0 18.7 0-9.6-16L417.2 247.4 405.6 259 547.7 496 28.3 496 288 63.1l92.1 153.5-52.9 52.9C316.4 261 302.8 256 288 256c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-14.8-5-28.4-13.4-39.2l50-50 11.7-11.7L541.7 77.7l5.7-5.7L536 60.7l-5.7 5.7L391.8 204.9 297.3 47.5 296 45.3 296 8zm40 312a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default TriangleInstrument;

import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-light stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0L320 0l0 32-80 0 0 64.6c49.4 3.8 94 24.8 127.7 57l37-37L416 105.4 438.6 128l-11.3 11.3-38.2 38.2C416 212.6 432 256.4 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-109.5 84.6-199.2 192-207.4L208 32l-80 0 0-32zM48 304a176 176 0 1 0 352 0A176 176 0 1 0 48 304zm192-96l0 112 0 16-32 0 0-16 0-112 0-16 32 0 0 16z" />
    </Icon>
);

export default Stopwatch;
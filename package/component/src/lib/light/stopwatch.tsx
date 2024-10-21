
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=light stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16c0-8.8 7.2-16 16-16L304 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 64.6c49.4 3.8 94 24.8 127.7 57l37-37c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-38.2 38.2C416 212.6 432 256.4 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-109.5 84.6-199.2 192-207.4L208 32l-64 0c-8.8 0-16-7.2-16-16zM48 304a176 176 0 1 0 352 0A176 176 0 1 0 48 304zm192-96l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default Stopwatch;
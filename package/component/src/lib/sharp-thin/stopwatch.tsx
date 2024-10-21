
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-thin stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0L304 0l0 16-72 0 0 80.2c55.4 2.1 105.3 25.9 141.4 63.1l36.9-36.9 5.7-5.7L427.3 128l-5.7 5.7-37.6 37.6C414 207.2 432 253.5 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-112.2 88.8-203.6 200-207.8L216 16l-72 0 0-16zm80 496a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm8-312l0 136 0 8-16 0 0-8 0-136 0-8 16 0 0 8z" />
    </Icon>
);

export default Stopwatch;
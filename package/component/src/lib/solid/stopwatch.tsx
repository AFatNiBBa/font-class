
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=solid stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6L256 64l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L224 0 176 0zm72 192l0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-128c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default Stopwatch;
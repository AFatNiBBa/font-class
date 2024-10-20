
import { Icon } from "../../index";

/**
 * A component that renders the `lines-leaning` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lines-leaning?s=sharp-solid lines-leaning}
 * @preview ![lines-leaning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lines-leaning.svg)
 */
const LinesLeaning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M190.5 73.5L200.1 43 139 23.9l-9.5 30.5-120 384L-.1 469 61 488.1l9.5-30.5 120-384zM292.8 37.7L229.7 27.2l-5.3 31.6-64 384-5.3 31.6 63.1 10.5 5.3-31.6 64-384 5.3-31.6zM384 32l-64 0 0 32 0 384 0 32 64 0 0-32 0-384 0-32z" />
    </Icon>
);

export default LinesLeaning;
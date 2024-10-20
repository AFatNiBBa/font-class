
import { Icon } from "../../index";

/**
 * A component that renders the `glass` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=solid glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4 .1 34.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3l166.6 0c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0L32 0zM70.9 128L66.4 64l251.3 0-4.6 64L70.9 128z" />
    </Icon>
);

export default Glass;
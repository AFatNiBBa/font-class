
import { Icon } from "../../index";

/**
 * A component that renders the `glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=sharp-solid glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M74.2 128l-5-64 245.6 0-5 64L74.2 128zM40 512l304 0L379 64l5-64L319.8 0 64.2 0 0 0 5 64 40 512z" />
    </Icon>
);

export default Glass;
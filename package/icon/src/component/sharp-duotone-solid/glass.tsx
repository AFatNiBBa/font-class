
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=sharp-duotone-solid glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L5 64 40 512l304 0L379 64l5-64L319.8 0 64.2 0 0 0zM69.2 64l245.6 0c-1.7 21.3-3.3 42.7-5 64l-25 320L99.2 448l-25-320-5-64z" />
        <path d="M74.2 128l25 320 185.6 0 25-320L74.2 128z" />
    </Icon>
);

export default Glass;
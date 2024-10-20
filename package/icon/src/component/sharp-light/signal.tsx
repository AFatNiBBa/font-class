
import { Icon } from "../../index";

/**
 * A component that renders the `signal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal?s=sharp-light signal}
 * @preview ![signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signal.svg)
 */
const Signal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M592 16l0-16L560 0l0 16 0 480 0 16 32 0 0-16 0-480zM464 96l-32 0 0 16 0 384 0 16 32 0 0-16 0-384 0-16zM336 208l0-16-32 0 0 16 0 288 0 16 32 0 0-16 0-288zM208 288l-32 0 0 16 0 192 0 16 32 0 0-16 0-192 0-16zM80 384l-32 0 0 16 0 96 0 16 32 0 0-16 0-96 0-16z" />
    </Icon>
);

export default Signal;
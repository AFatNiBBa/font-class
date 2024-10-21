
import { Icon } from "../../index";

/**
 * A component that renders the `signal-strong` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=sharp-light signal-strong}
 * @preview ![signal-strong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signal-strong.svg)
 */
const SignalStrong: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 112l0-16-32 0 0 16 0 384 0 16 32 0 0-16 0-384zM336 192l-32 0 0 16 0 288 0 16 32 0 0-16 0-288 0-16zM208 304l0-16-32 0 0 16 0 192 0 16 32 0 0-16 0-192zM80 400l0-16-32 0 0 16 0 96 0 16 32 0 0-16 0-96z" />
    </Icon>
);

export default SignalStrong;

import { Icon } from "../../index";

/**
 * A component that renders the `signal-strong` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=light signal-strong}
 * @preview ![signal-strong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/signal-strong.svg)
 */
const SignalStrong: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16s16-7.2 16-16l0-384zM320 192c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16s16-7.2 16-16l0-288c0-8.8-7.2-16-16-16zM208 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192zM80 400c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96z" />
    </Icon>
);

export default SignalStrong;
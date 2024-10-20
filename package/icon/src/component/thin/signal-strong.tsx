
import { Icon } from "../../index";

/**
 * A component that renders the `signal-strong` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=thin signal-strong}
 * @preview ![signal-strong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signal-strong.svg)
 */
const SignalStrong: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M456 104c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 400c0 4.4 3.6 8 8 8s8-3.6 8-8l0-400zM320 192c-4.4 0-8 3.6-8 8l0 304c0 4.4 3.6 8 8 8s8-3.6 8-8l0-304c0-4.4-3.6-8-8-8zM200 296c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 208c0 4.4 3.6 8 8 8s8-3.6 8-8l0-208zM72 392c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112z" />
    </Icon>
);

export default SignalStrong;
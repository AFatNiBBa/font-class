
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=thin signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 384c4.4 0 8 3.6 8 8l0 112c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-112c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default SignalWeak;
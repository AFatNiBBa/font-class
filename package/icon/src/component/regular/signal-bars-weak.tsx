
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=regular signal-bars-weak}
 * @preview ![signal-bars-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/signal-bars-weak.svg)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 448a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM80 384a64 64 0 1 0 0 128 64 64 0 1 0 0-128z" />
    </Icon>
);

export default SignalBarsWeak;
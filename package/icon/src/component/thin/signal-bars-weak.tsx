
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=thin signal-bars-weak}
 * @preview ![signal-bars-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signal-bars-weak.svg)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 464c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32zM80 384c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default SignalBarsWeak;
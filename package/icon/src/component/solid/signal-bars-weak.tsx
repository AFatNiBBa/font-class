
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=solid signal-bars-weak}
 * @preview ![signal-bars-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/signal-bars-weak.svg)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 432c0-26.5 21.5-48 48-48s48 21.5 48 48v32c0 26.5-21.5 48-48 48s-48-21.5-48-48V432z" />
    </Icon>
);

export default SignalBarsWeak;
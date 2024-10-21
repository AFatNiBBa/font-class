
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=sharp-light signal-bars-weak}
 * @preview ![signal-bars-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signal-bars-weak.svg)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 416l0 64-32 0 0-64 32 0zM64 384l-32 0 0 32 0 64 0 32 32 0 32 0 32 0 0-32 0-64 0-32-32 0-32 0z" />
    </Icon>
);

export default SignalBarsWeak;
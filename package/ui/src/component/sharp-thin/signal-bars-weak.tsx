
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=sharp-thin signal-bars-weak}
 * @preview ![signal-bars-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal-bars-weak.svg)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 400l0 96-64 0 0-96 64 0zM48 384l-16 0 0 16 0 96 0 16 16 0 64 0 16 0 0-16 0-96 0-16-16 0-64 0z" />
    </Icon>
);

export default SignalBarsWeak;
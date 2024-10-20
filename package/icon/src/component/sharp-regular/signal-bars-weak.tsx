
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=sharp-regular signal-bars-weak}
 * @preview ![signal-bars-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/signal-bars-weak.svg)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 432l0 32-32 0 0-32 32 0zM64 384l-48 0 0 48 0 32 0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0z" />
    </Icon>
);

export default SignalBarsWeak;
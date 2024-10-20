
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=sharp-solid signal-bars-weak}
 * @preview ![signal-bars-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal-bars-weak.svg)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 384h96V512H32V384z" />
    </Icon>
);

export default SignalBarsWeak;
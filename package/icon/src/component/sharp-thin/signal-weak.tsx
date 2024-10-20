
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=sharp-thin signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M72 384l0 8 0 112 0 8-16 0 0-8 0-112 0-8 16 0z" />
    </Icon>
);

export default SignalWeak;
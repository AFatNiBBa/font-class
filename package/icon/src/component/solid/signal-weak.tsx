
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=solid signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 384c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default SignalWeak;
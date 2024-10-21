
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=sharp-light signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 384l0 16 0 96 0 16-32 0 0-16 0-96 0-16 32 0z" />
    </Icon>
);

export default SignalWeak;
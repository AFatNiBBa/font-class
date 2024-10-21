
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=sharp-solid signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 384l0 32 0 64 0 32-64 0 0-32 0-64 0-32 64 0z" />
    </Icon>
);

export default SignalWeak;
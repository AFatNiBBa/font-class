
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=regular signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 384c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default SignalWeak;
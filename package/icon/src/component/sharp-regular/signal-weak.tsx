
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=sharp-regular signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M88 384l0 24 0 80 0 24-48 0 0-24 0-80 0-24 48 0z" />
    </Icon>
);

export default SignalWeak;
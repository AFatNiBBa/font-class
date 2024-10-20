
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=light signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 384c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default SignalWeak;
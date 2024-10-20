
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars?s=regular signal-bars}
 * @preview ![signal-bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/signal-bars.svg)
 */
const SignalBars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 448l0-384c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16s16-7.2 16-16zM496 64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 384c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-384zM416 448l0-256c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16s16-7.2 16-16zM336 192c0-35.3 28.7-64 64-64s64 28.7 64 64l0 256c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-256zM240 464c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16zm0-208c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-128c0-35.3 28.7-64 64-64zM80 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm64-16A64 64 0 1 1 16 448a64 64 0 1 1 128 0z" />
    </Icon>
);

export default SignalBars;
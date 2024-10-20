
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-good` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-good?s=sharp-solid signal-bars-good}
 * @preview ![signal-bars-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal-bars-good.svg)
 */
const SignalBarsGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 128l-96 0 0 384 96 0 0-384zM192 256l0 256 96 0 0-256-96 0zM32 384l0 128 96 0 0-128-96 0z" />
    </Icon>
);

export default SignalBarsGood;
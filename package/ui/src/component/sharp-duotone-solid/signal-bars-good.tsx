
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-good` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-good?s=sharp-duotone-solid signal-bars-good}
 * @preview ![signal-bars-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-bars-good.svg)
 */
const SignalBarsGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M512 0l96 0 0 512-96 0L512 0z" />
        <path d="M448 128l-96 0 0 384 96 0 0-384zM192 256l0 256 96 0 0-256-96 0zM32 384l0 128 96 0 0-128-96 0z" />
    </Icon>
);

export default SignalBarsGood;
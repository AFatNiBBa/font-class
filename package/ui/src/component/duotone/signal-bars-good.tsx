
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-good` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-good?s=duotone signal-bars-good}
 * @preview ![signal-bars-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signal-bars-good.svg)
 */
const SignalBarsGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M512 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 416c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-416z" />
        <path d="M400 128c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48s48-21.5 48-48l0-288c0-26.5-21.5-48-48-48zM192 304l0 160c0 26.5 21.5 48 48 48s48-21.5 48-48l0-160c0-26.5-21.5-48-48-48s-48 21.5-48 48zM32 432l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
    </Icon>
);

export default SignalBarsGood;
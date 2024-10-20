
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-fair` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-fair?s=duotone signal-bars-fair}
 * @preview ![signal-bars-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signal-bars-fair.svg)
 */
const SignalBarsFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352 176l0 288c0 26.5 21.5 48 48 48s48-21.5 48-48l0-288c0-26.5-21.5-48-48-48s-48 21.5-48 48zM512 48l0 416c0 26.5 21.5 48 48 48s48-21.5 48-48l0-416c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
        <path d="M240 256c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48s48-21.5 48-48l0-160c0-26.5-21.5-48-48-48zM80 384c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default SignalBarsFair;
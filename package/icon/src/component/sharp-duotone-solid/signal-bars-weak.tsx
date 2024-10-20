
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=sharp-duotone-solid signal-bars-weak}
 * @preview ![signal-bars-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-bars-weak.svg)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 256l0 256 96 0 0-256-96 0zM352 128l0 384 96 0 0-384-96 0zM512 0l0 512 96 0L608 0 512 0z" />
        <path d="M32 384h96V512H32V384z" />
    </Icon>
);

export default SignalBarsWeak;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=sharp-duotone-solid signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 288l0 32 0 160 0 32 64 0 0-32 0-160 0-32-64 0zm128-96l0 32 0 256 0 32 64 0 0-32 0-256 0-32-64 0zM416 96l0 32 0 352 0 32 64 0 0-32 0-352 0-32-64 0zM544 0l0 32 0 448 0 32 64 0 0-32 0-448 0-32L544 0z" />
        <path d="M96 384l0 32 0 64 0 32-64 0 0-32 0-64 0-32 64 0z" />
    </Icon>
);

export default SignalWeak;
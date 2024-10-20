
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=sharp-duotone-solid signal-fair}
 * @preview ![signal-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-fair.svg)
 */
const SignalFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 192l0 32 0 256 0 32 64 0 0-32 0-256 0-32-64 0zM416 96l0 32 0 352 0 32 64 0 0-32 0-352 0-32-64 0zM544 0l0 32 0 448 0 32 64 0 0-32 0-448 0-32L544 0z" />
        <path d="M224 320l0-32-64 0 0 32 0 160 0 32 64 0 0-32 0-160zM96 416l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64z" />
    </Icon>
);

export default SignalFair;
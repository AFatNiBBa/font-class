
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-slash?s=sharp-duotone-solid signal-slash}
 * @preview ![signal-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-slash.svg)
 */
const SignalSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 384l0 32 0 64 0 32 64 0 0-32 0-64 0-32-64 0zm128-96l0 32 0 160 0 32 64 0 0-32 0-160 0-32-64 0zm128-96l0 8.8c21.3 16.6 42.7 33.1 64 49.7l0-26.5 0-32-64 0zm0 130.9L288 480l0 32 64 0 0-32 0-106.7-64-50.4zM416 96l0 32 0 172.2c21.3 16.6 42.7 33.1 64 49.7L480 128l0-32-64 0zm0 327.8l0 56.2 0 32 64 0 0-32 0-5.8-64-50.4zM544 0l0 32 0 367.6 64 49.7L608 32l0-32L544 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default SignalSlash;
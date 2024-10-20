
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-slash?s=sharp-solid signal-bars-slash}
 * @preview ![signal-bars-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal-bars-slash.svg)
 */
const SignalBarsSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 0L512 0l0 374.7L448 325l0-197-96 0 0 122.5L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7-12.9-10L608 0zM288 322.9L203.1 256 192 256l0 256 96 0 0-189.1zM448 449l-96-75.6L352 512l96 0 0-63zM128 384l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default SignalBarsSlash;
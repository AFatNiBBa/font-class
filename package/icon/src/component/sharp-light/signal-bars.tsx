
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars?s=sharp-light signal-bars}
 * @preview ![signal-bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signal-bars.svg)
 */
const SignalBars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 32l0 448 32 0 0-448-32 0zM512 0l32 0 32 0 32 0 0 32 0 448 0 32-32 0-32 0-32 0 0-32 0-448 0-32zM384 160l0 320 32 0 0-320-32 0zm-32-32l32 0 32 0 32 0 0 32 0 320 0 32-32 0-32 0-32 0 0-32 0-320 0-32zM256 288l-32 0 0 192 32 0 0-192zm-32-32l32 0 32 0 0 32 0 192 0 32-32 0-32 0-32 0 0-32 0-192 0-32 32 0zM64 416l0 64 32 0 0-64-32 0zM32 384l32 0 32 0 32 0 0 32 0 64 0 32-32 0-32 0-32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default SignalBars;
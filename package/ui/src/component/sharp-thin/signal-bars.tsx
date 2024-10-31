
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars?s=sharp-thin signal-bars}
 * @preview ![signal-bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal-bars.svg)
 */
const SignalBars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528 16l0 480 64 0 0-480-64 0zM512 0l16 0 64 0 16 0 0 16 0 480 0 16-16 0-64 0-16 0 0-16 0-480 0-16zM432 144l-64 0 0 352 64 0 0-352zm-64-16l64 0 16 0 0 16 0 352 0 16-16 0-64 0-16 0 0-16 0-352 0-16 16 0zM208 272l0 224 64 0 0-224-64 0zm-16-16l16 0 64 0 16 0 0 16 0 224 0 16-16 0-64 0-16 0 0-16 0-224 0-16zM48 400l0 96 64 0 0-96-64 0zM32 384l16 0 64 0 16 0 0 16 0 96 0 16-16 0-64 0-16 0 0-16 0-96 0-16z" />
    </Icon>
);

export default SignalBars;
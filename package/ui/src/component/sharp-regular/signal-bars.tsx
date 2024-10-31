
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars?s=sharp-regular signal-bars}
 * @preview ![signal-bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/signal-bars.svg)
 */
const SignalBars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 48l0 416 32 0 0-416-32 0zM496 0l48 0 32 0 48 0 0 48 0 416 0 48-48 0-32 0-48 0 0-48 0-416 0-48zM384 176l0 288 32 0 0-288-32 0zm-48-48l48 0 32 0 48 0 0 48 0 288 0 48-48 0-32 0-48 0 0-48 0-288 0-48zM256 304l-32 0 0 160 32 0 0-160zm-32-48l32 0 48 0 0 48 0 160 0 48-48 0-32 0-48 0 0-48 0-160 0-48 48 0zM64 432l0 32 32 0 0-32-32 0zM16 384l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48z" />
    </Icon>
);

export default SignalBars;
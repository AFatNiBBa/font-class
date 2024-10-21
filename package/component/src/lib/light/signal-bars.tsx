
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars?s=light signal-bars}
 * @preview ![signal-bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/signal-bars.svg)
 */
const SignalBars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 464l0-416c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 416c0 8.8 7.2 16 16 16s16-7.2 16-16zM512 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 416c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-416zM416 176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16s16-7.2 16-16l0-288zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48l0 288c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-288zM256 464l0-160c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16zM240 256c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48zM96 432c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48l0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32z" />
    </Icon>
);

export default SignalBars;
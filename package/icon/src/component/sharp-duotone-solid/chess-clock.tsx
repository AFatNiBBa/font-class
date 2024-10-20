
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=sharp-duotone-solid chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 48 56 0 0 48 48 0 0-48 56 0 0-48L96 32zm64 192l0 16 0 64 0 16 32 0 0-16 0-64 0-16-32 0zM384 96l0 32 160 0 0-32L384 96zm57.4 208L464 326.6l11.3-11.3 48-48L534.6 256 512 233.4l-11.3 11.3-48 48L441.4 304z" />
        <path d="M0 128l640 0 0 352L0 480 0 128zM288 304A112 112 0 1 0 64 304a112 112 0 1 0 224 0zM464 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </Icon>
);

export default ChessClock;
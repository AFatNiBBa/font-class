
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=duotone chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 56c0 13.3 10.7 24 24 24l32 0 0 48 48 0 0-48 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L120 32c-13.3 0-24 10.7-24 24zm64 184l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16s-16 7.2-16 16zM384 112l0 16 160 0 0-16c0-8.8-7.2-16-16-16L400 96c-8.8 0-16 7.2-16 16zm68.7 180.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-48 48z" />
        <path d="M0 192c0-35.3 28.7-64 64-64l512 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192zM288 304A112 112 0 1 0 64 304a112 112 0 1 0 224 0zM464 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </Icon>
);

export default ChessClock;
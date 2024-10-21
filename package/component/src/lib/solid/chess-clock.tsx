
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=solid chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 56c0-13.3-10.7-24-24-24L120 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 48-88 0c-35.3 0-64 28.7-64 64L0 416c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-32 0 0-16c0-8.8-7.2-16-16-16L400 96c-8.8 0-16 7.2-16 16l0 16-184 0 0-48 32 0c13.3 0 24-10.7 24-24zM576 304a112 112 0 1 1 -224 0 112 112 0 1 1 224 0zm-52.7-59.3c-6.2-6.2-16.4-6.2-22.6 0l-48 48c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6zM176 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm-16 48l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
    </Icon>
);

export default ChessClock;
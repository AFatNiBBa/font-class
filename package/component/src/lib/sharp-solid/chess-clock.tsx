
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=sharp-solid chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 32L96 32l0 48 56 0 0 48L0 128 0 480l640 0 0-352-96 0 0-32L384 96l0 32-184 0 0-48 56 0 0-48zM576 304a112 112 0 1 1 -224 0 112 112 0 1 1 224 0zm-41.4-48L512 233.4l-11.3 11.3-48 48L441.4 304 464 326.6l11.3-11.3 48-48L534.6 256zM176 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm-16 48l0 64 0 16 32 0 0-16 0-64 0-16-32 0 0 16z" />
    </Icon>
);

export default ChessClock;
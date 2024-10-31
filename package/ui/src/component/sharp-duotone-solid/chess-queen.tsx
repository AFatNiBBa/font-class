
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-queen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen?s=sharp-duotone-solid chess-queen}
 * @preview ![chess-queen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-queen.svg)
 */
const ChessQueen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 480l48-48 288 0 48 48 0 32L64 512l0-32z" />
        <path d="M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM424 192c20.6 0 39-9.7 50.7-24.9L512 192 400 432l-288 0L0 192l37.3-24.9C49 182.3 67.4 192 88 192c35.3 0 64-28.7 64-64l42 0c6.2 24 26 42.6 50.7 47c3.4 .6 7.2 1 11.3 1s7.8-.3 11.3-1c24.7-4.4 44.5-23 50.7-47l42 0c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default ChessQueen;
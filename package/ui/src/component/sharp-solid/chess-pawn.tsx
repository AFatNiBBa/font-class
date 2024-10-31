
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=sharp-solid chess-pawn}
 * @preview ![chess-pawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-pawn.svg)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88L96 224l-32 0 0 64 28.4 0L80 400l160 0L227.6 288l28.4 0 0-64-32 0-8.5 0zM16 512l288 0 0-32-48-48L64 432 16 480l0 32z" />
    </Icon>
);

export default ChessPawn;
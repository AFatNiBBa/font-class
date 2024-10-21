
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=sharp-solid chess-bishop}
 * @preview ![chess-bishop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-bishop.svg)
 */
const ChessBishop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M128 0L96 0l0 64 27 0C78.1 107.2 8 190.2 8 288c0 47.4 30.8 72.3 56 84.7L64 400l192 0 0-27.3c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4L176 294.6 153.4 272l11.3-11.3L270.8 154.6c-23-37.9-51.5-69.2-73.8-90.6l27 0 0-64L192 0 128 0zM0 512l320 0 0-32-48-48L48 432 0 480l0 32z" />
    </Icon>
);

export default ChessBishop;
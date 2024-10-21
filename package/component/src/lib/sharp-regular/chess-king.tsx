
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=sharp-regular chess-king}
 * @preview ![chess-king](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-king.svg)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 24l0-24L200 0l0 24 0 32-32 0-24 0 0 48 24 0 32 0 0 40L48 144 0 144l0 48 0 24L59.1 352l52.3 0L48 206l0-14 152 0 48 0 152 0 0 14L336.5 352l52.3 0L448 216l0-24 0-48-48 0-152 0 0-40 32 0 24 0 0-48-24 0-32 0 0-32zM84.7 464l16.6-32 245.6 0 16.6 32L84.7 464zM416 461.3L376 384 72 384 32 461.3l0 2.7 0 48 48 0 288 0 48 0 0-48 0-2.7z" />
    </Icon>
);

export default ChessKing;
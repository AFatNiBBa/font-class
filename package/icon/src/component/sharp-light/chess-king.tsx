
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=sharp-light chess-king}
 * @preview ![chess-king](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-king.svg)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 16l0-16L208 0l0 16 0 32-40 0-16 0 0 32 16 0 40 0 0 48L32 128 0 128l0 32 0 40L66.1 352l34.9 0L32 193.3 32 160l176 0 32 0 176 0 0 33.3L347 352l34.9 0L448 200l0-40 0-32-32 0-176 0 0-48 40 0 16 0 0-32-16 0-40 0 0-32zM64 470.5L97.8 416l252.4 0L384 470.5l0 9.5L64 480l0-9.5zM80 384L32 461.3 32 480l0 32 32 0 320 0 32 0 0-32 0-18.7L368 384 80 384z" />
    </Icon>
);

export default ChessKing;
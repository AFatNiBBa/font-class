
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight-piece` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=light chess-knight-piece}
 * @preview ![chess-knight-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-knight-piece.svg)
 */
const ChessKnightPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M53.3 96l80.4 0C210.1 96 272 157.9 272 234.3c0 12.7-1.7 25.3-5.2 37.5L244.3 352l33.2 0 20.1-71.5c4.2-15 6.4-30.6 6.4-46.2C304 140.3 227.7 64 133.7 64L45.3 64c-16 0-28.9 12.9-28.9 28.9c0 8.2 3.5 16 9.6 21.5l7.7 6.9c-11.1 14-17.3 31.5-17.3 49.5l-.2 65.1c-.1 26.9 17.6 49.7 42.1 57.3c-6.3 11.7-9.8 25-9.8 38.7L48.2 352l32 0 .2-19.8s0 0 0 0l0-.2c0-15.6 7.4-30.3 19.9-39.7l76.1-46.7c7.5-4.6 9.9-14.5 5.3-22s-14.5-9.9-22-5.3l-36.5 22.4c-1.2 .4-2.3 .9-3.4 1.5L90.3 260c-4.4 2.6-9.4 4-14.5 4c-15.3-.1-27.7-12.6-27.7-27.9l.2-65.1c0-11.7 4.3-23 12.1-31.7l7.6-8.6c5.8-6.6 5.3-16.6-1.3-22.5L53.3 96zM96 192a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM65.8 416l188.4 0 32.7 52.7c.7 1.2 1.1 2.5 1.1 3.9c0 4.1-3.3 7.4-7.4 7.4L39.4 480c-4.1 0-7.4-3.3-7.4-7.4c0-1.4 .4-2.7 1.1-3.9L65.8 416zm188.4-32L65.8 384c-11.1 0-21.4 5.7-27.2 15.1L5.9 451.8C2.1 458 0 465.2 0 472.6C0 494.3 17.7 512 39.4 512l241.1 0c21.8 0 39.4-17.7 39.4-39.4c0-7.3-2.1-14.5-5.9-20.8l-32.7-52.7c-5.8-9.4-16.1-15.1-27.2-15.1z" />
    </Icon>
);

export default ChessKnightPiece;
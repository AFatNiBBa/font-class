
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=light chess-king}
 * @preview ![chess-king](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-king.svg)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l40 0 0 48L59.6 128C26.7 128 0 154.7 0 187.6c0 8.2 1.7 16.3 4.9 23.8L66.1 352l34.9 0L34.3 198.6c-1.5-3.5-2.3-7.2-2.3-11C32 172.4 44.4 160 59.6 160L224 160l164.4 0c15.2 0 27.6 12.4 27.6 27.6c0 3.8-.8 7.5-2.3 11L347 352l34.9 0 61.1-140.6c3.3-7.5 4.9-15.6 4.9-23.8c0-32.9-26.7-59.6-59.6-59.6L240 128l0-48 40 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-40 0 0-32zM382.9 468.7c.7 1.2 1.1 2.5 1.1 3.9c0 4.1-3.3 7.4-7.4 7.4L71.4 480c-4.1 0-7.4-3.3-7.4-7.4c0-1.4 .4-2.7 1.1-3.9L97.8 416l252.4 0 32.7 52.7zM97.8 384c-11.1 0-21.4 5.7-27.2 15.1L37.9 451.8C34.1 458 32 465.2 32 472.6C32 494.3 49.7 512 71.4 512l305.1 0c21.8 0 39.4-17.7 39.4-39.4c0-7.3-2.1-14.5-5.9-20.8l-32.7-52.7c-5.8-9.4-16.1-15.1-27.2-15.1L97.8 384z" />
    </Icon>
);

export default ChessKing;
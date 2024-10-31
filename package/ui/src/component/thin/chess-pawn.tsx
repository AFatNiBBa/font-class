
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=thin chess-pawn}
 * @preview ![chess-pawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chess-pawn.svg)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 144A96 96 0 1 0 64 144a96 96 0 1 0 192 0zm16 0c0 40.7-21.8 76.4-54.3 96l4.9 0 33.4 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-30.3 0 24.8 128-16.3 0L209.4 256 160 256l-49.4 0L85.8 384l-16.3 0L94.3 256 64 256c-4.4 0-8-3.6-8-8s3.6-8 8-8l33.4 0 4.9 0C69.8 220.4 48 184.7 48 144C48 82.1 98.1 32 160 32s112 50.1 112 112zM50.4 437.3L19.8 471.2c-2.5 2.7-3.8 6.3-3.8 9.9c0 8.2 6.6 14.8 14.8 14.8l258.3 0c8.2 0 14.8-6.6 14.8-14.8c0-3.7-1.4-7.2-3.8-9.9l-30.6-33.9c-3-3.4-7.4-5.3-11.9-5.3L62.3 432c-4.5 0-8.9 1.9-11.9 5.3zm261.7 23.2c5.1 5.7 7.9 13 7.9 20.6c0 17-13.8 30.8-30.8 30.8L30.8 512C13.8 512 0 498.2 0 481.2c0-7.6 2.8-15 7.9-20.6l30.6-33.9c6.1-6.7 14.7-10.6 23.8-10.6l195.5 0c9.1 0 17.7 3.8 23.8 10.6l30.6 33.9z" />
    </Icon>
);

export default ChessPawn;
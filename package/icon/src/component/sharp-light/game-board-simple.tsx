
import { Icon } from "../../index";

/**
 * A component that renders the `game-board-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board-simple?s=sharp-light game-board-simple}
 * @preview ![game-board-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/game-board-simple.svg)
 */
const GameBoardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM80 96l144 0 16 0 0 16 0 128 128 0 16 0 0 16 0 144 0 16-16 0-144 0-16 0 0-16 0-128L80 272l-16 0 0-16 0-144 0-16 16 0zm128 32L96 128l0 112 112 0 0-112zm32 256l112 0 0-112-112 0 0 112z" />
    </Icon>
);

export default GameBoardSimple;
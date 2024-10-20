
import { Icon } from "../../index";

/**
 * A component that renders the `game-board-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board-simple?s=sharp-thin game-board-simple}
 * @preview ![game-board-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/game-board-simple.svg)
 */
const GameBoardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM64 88l160 0 8 0 0 8 0 152 152 0 8 0 0 8 0 160 0 8-8 0-160 0-8 0 0-8 0-152L64 264l-8 0 0-8L56 96l0-8 8 0zm152 16L72 104l0 144 144 0 0-144zm16 304l144 0 0-144-144 0 0 144z" />
    </Icon>
);

export default GameBoardSimple;
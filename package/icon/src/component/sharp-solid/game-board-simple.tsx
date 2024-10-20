
import { Icon } from "../../index";

/**
 * A component that renders the `game-board-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board-simple?s=sharp-solid game-board-simple}
 * @preview ![game-board-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/game-board-simple.svg)
 */
const GameBoardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM224 96l0 160 160 0 0-160L224 96zm0 160L64 256l0 160 160 0 0-160z" />
    </Icon>
);

export default GameBoardSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=sharp-regular game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zM304 96l-80 0 0 80-80 0 0-80L64 96l0 80 80 0 0 80-80 0 0 80 80 0 0 80 80 0 0-80 80 0 0 80 80 0 0-80-80 0 0-80 80 0 0-80-80 0 0-80zM224 256l0 80-80 0 0-80 80 0zm0 0l0-80 80 0 0 80-80 0z" />
    </Icon>
);

export default GameBoard;
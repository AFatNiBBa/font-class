
import { Icon, generic } from "../../index";

/**
 * A component that renders the `game-board` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=duotone game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm64 0l80 0 80 0 80 0 80 0 0 80 0 80 0 80 0 80-80 0-80 0-80 0-80 0 0-80 0-80 0-80 0-80z" />
        <path d="M64 256l0 80h80V256H64zM384 416l0-80H304v80h80zm-240 0h80V336H144v80zM64 96l0 80h80V96H64zm160 80H144v80h80V176zm0 80v80h80V256H224zm160 0V176H304v80h80zM304 96H224v80h80V96z" />
    </Icon>
);

export default GameBoard;
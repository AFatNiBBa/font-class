
import { Icon, generic } from "../../index";

/**
 * A component that renders the `game-board` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=sharp-duotone-solid game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l80 0 80 0 80 0 80 0 0 80 0 80 0 80 0 80-80 0-80 0-80 0-80 0 0-80 0-80 0-80 0-80z" />
        <path d="M64 256l0 80h80V256H64zM384 416l0-80H304v80h80zm-240 0h80V336H144v80zM64 96l0 80h80V96H64zm160 80H144v80h80V176zm0 80v80h80V256H224zm160 0V176H304v80h80zM304 96H224v80h80V96z" />
    </Icon>
);

export default GameBoard;
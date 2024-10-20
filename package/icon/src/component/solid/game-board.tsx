
import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=solid game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm144 0v80h80V96H144zm0 160V176H64v80h80zm80 0H144v80H64v80h80V336h80v80h80V336h80V256H304V176h80V96H304v80H224v80zm0 0h80v80H224V256z" />
    </Icon>
);

export default GameBoard;
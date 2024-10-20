
import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=sharp-solid game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32H448V480H0V32zM144 96v80h80V96H144zm0 160V176H64v80h80zm80 0H144v80H64v80h80V336h80v80h80V336h80V256H304V176h80V96H304v80H224v80zm0 0h80v80H224V256z" />
    </Icon>
);

export default GameBoard;
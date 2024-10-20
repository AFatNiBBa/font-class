
import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=sharp-thin game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM136 96l0 56 80 0 0-56 0-8 16 0 0 8 0 56 80 0 0-56 0-8 16 0 0 8 0 56 56 0 8 0 0 16-8 0-56 0 0 80 56 0 8 0 0 16-8 0-56 0 0 80 56 0 8 0 0 16-8 0-56 0 0 56 0 8-16 0 0-8 0-56-80 0 0 56 0 8-16 0 0-8 0-56-80 0 0 56 0 8-16 0 0-8 0-56-56 0-8 0 0-16 8 0 56 0 0-80-56 0-8 0 0-16 8 0 56 0 0-80-56 0-8 0 0-16 8 0 56 0 0-56 0-8 16 0 0 8zm0 152l80 0 0-80-80 0 0 80zm96 0l80 0 0-80-80 0 0 80zm0 16l0 80 80 0 0-80-80 0zm-16 0l-80 0 0 80 80 0 0-80z" />
    </Icon>
);

export default GameBoard;

import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=sharp-light game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm144 80l0 32 64 0 0-32 0-16 32 0 0 16 0 32 64 0 0-32 0-16 32 0 0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 64 32 0 16 0 0 32-16 0-32 0 0 64 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-64 0 0 32 0 16-32 0 0-16 0-32-64 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-64-32 0-16 0 0-32 16 0 32 0 0-64-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0 0 16zm0 128l64 0 0-64-64 0 0 64zm96 0l64 0 0-64-64 0 0 64zm0 32l0 64 64 0 0-64-64 0zm-32 0l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default GameBoard;
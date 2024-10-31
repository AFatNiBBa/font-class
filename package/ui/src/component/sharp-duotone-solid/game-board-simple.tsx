
import { Icon, generic } from "../../index";

/**
 * A component that renders the `game-board-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board-simple?s=sharp-duotone-solid game-board-simple}
 * @preview ![game-board-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/game-board-simple.svg)
 */
const GameBoardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l160 0 160 0 0 160 0 160-160 0L64 416l0-160L64 96z" />
        <path d="M64 96l0 160H224V96H64zM224 256V416H384l0-160H224z" />
    </Icon>
);

export default GameBoardSimple;
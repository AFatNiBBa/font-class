
import { Icon, generic } from "../../index";

/**
 * A component that renders the `game-console-handheld-crank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-console-handheld-crank?s=sharp-duotone-solid game-console-handheld-crank}
 * @preview ![game-console-handheld-crank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/game-console-handheld-crank.svg)
 */
const GameConsoleHandheldCrank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-160 0-48 0-240L0 32zM64 96l320 0 0 160L64 256 64 96zm0 256l16 0 16 0 0-16 0-16 32 0 0 16 0 16 16 0 16 0 0 32-16 0-16 0 0 16 0 16-32 0 0-16 0-16-16 0-16 0 0-32zm208 8a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm80 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM480 144l0 80 48 0 48 0 0-80-96 0z" />
        <path d="M384 96L64 96l0 160 320 0 0-160zM528 296l0-72-48 0 0 48-32 0 0 48 56 0 24 0 0-24z" />
    </Icon>
);

export default GameConsoleHandheldCrank;
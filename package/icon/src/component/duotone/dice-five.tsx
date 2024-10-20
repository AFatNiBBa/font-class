
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-five` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-five?s=duotone dice-five}
 * @preview ![dice-five](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dice-five.svg)
 */
const DiceFive: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm160 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M96 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm0 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DiceFive;
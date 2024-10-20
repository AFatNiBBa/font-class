
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-three` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-three?s=sharp-duotone-solid dice-three}
 * @preview ![dice-three](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-three.svg)
 */
const DiceThree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM160 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M96 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DiceThree;
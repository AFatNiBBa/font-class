
import { Icon, generic } from "../../index";

/**
 * A component that renders the `child-combatant` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-combatant?s=sharp-duotone-solid child-combatant}
 * @preview ![child-combatant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/child-combatant.svg)
 */
const ChildCombatant: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M16 294.4l51.2 38.4 19.2-25.6L96 294.4 96 480l0 32 64 0 0-32 0-96 32 0 0 96 0 32 64 0 0-32 0-185.6 9.6 12.8 19.2 25.6L336 294.4l-19.2-25.6-72.1-96L235.1 160l-16 0-86.2 0-16 0-9.6 12.8-72.1 96L16 294.4zM112 64a64 64 0 1 0 128 0A64 64 0 1 0 112 64z" />
        <path d="M448 0l16 0 0 128 16 0 0 141.3 16-5.3 0-72 48 0 0 112-64 21.3 0 26.7 64 0 0 48-60 0 28 112-96 0 0-112-48 0 0-208 32 0 0-64 16 0 0-96-16 0 0-32 16 0 32 0z" />
    </Icon>
);

export default ChildCombatant;
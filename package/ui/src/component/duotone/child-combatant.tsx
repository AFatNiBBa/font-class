
import { Icon, generic } from "../../index";

/**
 * A component that renders the `child-combatant` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-combatant?s=duotone child-combatant}
 * @preview ![child-combatant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/child-combatant.svg)
 */
const ChildCombatant: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 304c0 10.6 5.3 21 15 27.1c15 9.4 34.7 4.9 44.1-10L104 300.5 104 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-179.5L260.9 321c9.4 15 29.2 19.4 44.1 10s19.4-29.2 10-44.1l-51.7-82.1c-17.6-27.9-48.3-44.9-81.2-44.9l-12.3 0c-33 0-63.7 16.9-81.2 44.9L36.9 287c-3.3 5.3-4.9 11.2-4.9 17zM112 64a64 64 0 1 0 128 0A64 64 0 1 0 112 64z" />
        <path d="M432 0l16 0c8.8 0 16 7.2 16 16l0 116.3c9.6 5.5 16 15.9 16 27.7l0 109.3 16-5.3 0-56c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 84.5c0 6.9-4.4 13-10.9 15.2L480 325.3l0 26.7 48 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-44 0 23 92.1c2.5 10.1-5.1 19.9-15.5 19.9L432 512c-8.8 0-16-7.2-16-16l0-96-16 0c-17.7 0-32-14.3-32-32l0-144c0-17.7 14.3-32 32-32l0-32c0-11.8 6.4-22.2 16-27.7L416 32c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0z" />
    </Icon>
);

export default ChildCombatant;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `helmet-battle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-battle?s=sharp-duotone-solid helmet-battle}
 * @preview ![helmet-battle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/helmet-battle.svg)
 */
const HelmetBattle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 32 64 0L64 0 0 224zM512 0l0 256 64 0 0-32L512 0z" />
        <path d="M96 224c0 80-32 192-32 192l192 96V256l-96-32V192H416v32l-96 32V512l192-96s-32-112-32-192C480 80 288 0 288 0S96 80 96 224z" />
    </Icon>
);

export default HelmetBattle;
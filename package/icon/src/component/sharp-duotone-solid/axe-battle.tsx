
import { Icon, generic } from "../../index";

/**
 * A component that renders the `axe-battle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe-battle?s=sharp-duotone-solid axe-battle}
 * @preview ![axe-battle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/axe-battle.svg)
 */
const AxeBattle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 320 88 384 88 384s33.2-106.3 136-125.2l0-133.7C121.2 106.3 88 0 88 0S0 64 0 192zm288-66.8l0 133.7C390.8 277.7 424 384 424 384s73.7-53.6 86.2-160.9L448 192l62.2-31.1C497.7 53.6 424 0 424 0s-33.2 106.3-136 125.2z" />
        <path d="M288 64l0-32-64 0 0 32 0 416 0 32 64 0 0-32 0-416z" />
    </Icon>
);

export default AxeBattle;

import { Icon } from "../../index";

/**
 * A component that renders the `axe-battle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe-battle?s=sharp-solid axe-battle}
 * @preview ![axe-battle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/axe-battle.svg)
 */
const AxeBattle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192C0 64 88 0 88 0s26.2 83.8 104 115.8l0 152.4C114.2 300.2 88 384 88 384s-88-64-88-192zm320 76.2l0-152.4C397.8 83.8 424 0 424 0s73.7 53.6 86.2 160.9L448 192l62.2 31.1C497.7 330.4 424 384 424 384s-26.2-83.8-104-115.8zM288 64l0 416 0 32-64 0 0-32 0-416 0-32 64 0 0 32z" />
    </Icon>
);

export default AxeBattle;
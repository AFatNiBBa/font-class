
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars?s=sharp-duotone-solid mars}
 * @preview ![mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mars.svg)
 */
const Mars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 304a80 80 0 1 0 160 0A80 80 0 1 0 96 304z" />
        <path d="M448 32L320 32 288 64l41.4 41.4L275.8 159c-28.4-19.5-62.7-31-99.8-31C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l53.6-53.6L416 192l32-32 0-128zM176 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224z" />
    </Icon>
);

export default Mars;
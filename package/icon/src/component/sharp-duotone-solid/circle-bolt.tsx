
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=sharp-duotone-solid circle-bolt}
 * @preview ![circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-bolt.svg)
 */
const CircleBolt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-8L320 112 280 240l88 0 0 24L192 400l40-128-88 0 0-24z" />
        <path d="M368 264L192 400l40-128H144V248L320 112 280 240h88v24z" />
    </Icon>
);

export default CircleBolt;
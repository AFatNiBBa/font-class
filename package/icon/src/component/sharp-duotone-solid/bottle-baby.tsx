
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bottle-baby` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-baby?s=sharp-duotone-solid bottle-baby}
 * @preview ![bottle-baby](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bottle-baby.svg)
 */
const BottleBaby: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 272l112 0 0 48-112 0 0 64 112 0 0 48-112 0 0 80 288 0 0-240c0-31.2-10.1-61.5-28.8-86.4L352 160l-192 0-19.2 25.6C122.1 210.5 112 240.8 112 272zM192 64l0 32 128 0 0-32L288 48l0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 16L192 64z" />
        <path d="M352 96L160 96l0 64 192 0 0-64zM112 272l0 48 112 0 0-48-112 0zm0 112l0 48 112 0 0-48-112 0z" />
    </Icon>
);

export default BottleBaby;
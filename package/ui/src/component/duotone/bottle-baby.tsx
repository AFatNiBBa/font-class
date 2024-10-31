
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bottle-baby` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-baby?s=duotone bottle-baby}
 * @preview ![bottle-baby](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bottle-baby.svg)
 */
const BottleBaby: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 272l88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 64 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 16c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-176c0-31.2-10.1-61.5-28.8-86.4L352 160l-192 0-19.2 25.6C122.1 210.5 112 240.8 112 272zM192 96l128 0c0-19.6-11.1-37.5-28.6-46.3L288 48l0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 16-3.4 1.7C203.1 58.5 192 76.4 192 96z" />
        <path d="M192 96c-17.7 0-32 14.3-32 32l0 32 192 0 0-32c0-17.7-14.3-32-32-32L192 96zM112 272l0 48 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0zm0 112l0 48 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0z" />
    </Icon>
);

export default BottleBaby;
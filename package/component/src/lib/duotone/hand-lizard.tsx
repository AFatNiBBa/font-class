
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=duotone hand-lizard}
 * @preview ![hand-lizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-lizard.svg)
 */
const HandLizard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112C0 85.5 21.5 64 48 64l112 0 80 0 46.5 0c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8l0 12 0 16 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-13.8L273.9 352 240 352l-80 0-48 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default HandLizard;
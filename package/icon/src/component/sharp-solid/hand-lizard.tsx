
import { Icon } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=sharp-solid hand-lizard}
 * @preview ![hand-lizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-lizard.svg)
 */
const HandLizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l48 0 112 0 80 0 80 0 25.1 0 14.3 20.7 144 208L512 305l0 15 0 32 0 16 0 80-160 0 0-45.8L273.9 352 240 352l-80 0-48 0-48 0 0-96 48 0 48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160 0 160 0 64z" />
    </Icon>
);

export default HandLizard;
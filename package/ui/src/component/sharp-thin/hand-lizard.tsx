
import { Icon } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=sharp-thin hand-lizard}
 * @preview ![hand-lizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hand-lizard.svg)
 */
const HandLizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l8 0 336 0 4.2 0 2.4 3.5 160 232 1.4 2.1 0 2.5 0 136 0 8-16 0 0-8 0-133.5L339.8 80 16 80l0 64 224 0c35.3 0 64 28.7 64 64s-28.7 64-64 64L80 272l0 64 192 0 2.6 0 2.1 1.5 88 64 3.3 2.4 0 4.1 0 32 0 8-16 0 0-8 0-27.9L269.4 352 72 352l-8 0 0-8 0-80 0-8 8 0 168 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L8 160l-8 0 0-8L0 72l0-8z" />
    </Icon>
);

export default HandLizard;
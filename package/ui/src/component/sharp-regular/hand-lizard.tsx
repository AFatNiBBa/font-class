
import { Icon } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=sharp-regular hand-lizard}
 * @preview ![hand-lizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hand-lizard.svg)
 */
const HandLizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l24 0 320 0 11.7 0 7.2 9.2 144 184 5.1 6.5 0 8.3 0 152 0 24-48 0 0-24 0-143.7L332.3 112 48 112l0 48 192 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-128 0 0 48 176 0 6.9 0 5.8 3.6 64 40 11.3 7 0 13.3 0 24 0 24-48 0 0-24 0-10.7L281.1 384 88 384l-24 0 0-24 0-96 0-24 24 0 152 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L24 208 0 208l0-24L0 88 0 64z" />
    </Icon>
);

export default HandLizard;
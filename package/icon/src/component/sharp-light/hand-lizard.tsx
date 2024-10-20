
import { Icon } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=sharp-light hand-lizard}
 * @preview ![hand-lizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hand-lizard.svg)
 */
const HandLizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l16 0 320 0 8.2 0 4.8 6.7 160 224 3 4.2 0 5.1 0 128 0 16-32 0 0-16 0-122.9L327.8 96 32 96l0 48 224 0c35.3 0 64 28.7 64 64s-28.7 64-64 64L96 272l0 48 176 0c3.2 0 6.2 .9 8.9 2.7l96 64c4.4 3 7.1 8 7.1 13.3l0 32 0 16-32 0 0-16 0-23.4L267.2 352 80 352l-16 0 0-16 0-80 0-16 16 0 176 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L16 176 0 176l0-16L0 80 0 64z" />
    </Icon>
);

export default HandLizard;
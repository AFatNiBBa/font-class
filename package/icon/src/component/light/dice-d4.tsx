
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=light dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240.1 56.5L35.4 310.6 240.1 465.9l0-409.4zm32 409.2L476.6 310.6 272.1 56.7l0 409.1zM256 0c7.3 0 14.1 3.3 18.7 8.9l232 288c4.1 5.1 5.9 11.5 5.1 18s-4.1 12.3-9.3 16.2l-232 176c-8.6 6.5-20.4 6.5-29 0l-232-176c-5.2-3.9-8.5-9.8-9.3-16.2s1.1-12.9 5.1-18l232-288C241.9 3.3 248.7 0 256 0z" />
    </Icon>
);

export default DiceD4;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=duotone dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.9 302.8c-4.7 6.7-3.6 15.8 2.5 21.2l208 184c4.7 4.2 11.4 5.2 17.2 2.6s9.4-8.3 9.4-14.6l0-480c0-7-4.5-13.2-11.2-15.3c-1.6-.5-3.2-.7-4.8-.7c-5.1 0-10 2.5-13.1 6.8l-208 296z" />
        <path d="M272 16c0-7 4.5-13.2 11.2-15.3s13.9 .3 17.9 6.1l208 296c4.7 6.7 3.6 15.8-2.5 21.2l-208 184c-4.7 4.2-11.4 5.2-17.2 2.6s-9.4-8.3-9.4-14.6l0-480z" />
    </Icon>
);

export default DiceD4;
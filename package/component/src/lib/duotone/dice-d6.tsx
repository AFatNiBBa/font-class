
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=duotone dice-d6}
 * @preview ![dice-d6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dice-d6.svg)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M17.3 120c0 5.9 3.2 11.2 8.3 14L216.3 238c2.4 1.3 5 2 7.7 2s5.3-.7 7.7-2L422.3 134c5.1-2.8 8.3-8.2 8.3-14s-3.2-11.2-8.3-14L247 10.3c-7.2-3.9-15.1-5.9-23-5.9s-15.8 2-23 5.9L25.7 106c-5.1 2.8-8.3 8.2-8.3 14z" />
        <path d="M7.8 170.2c4.9-2.9 10.9-3 15.8-.3l176 96c5.1 2.8 8.3 8.2 8.3 14l0 216c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L25 423.1C9.6 414.7 0 398.6 0 381L0 184c0-5.6 3-10.9 7.8-13.8zm432.3 0c4.9 2.9 7.8 8.1 7.8 13.8l0 197c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8l0-216c0-5.9 3.2-11.2 8.3-14l176-96c5-2.7 11-2.6 15.8 .3z" />
    </Icon>
);

export default DiceD6;
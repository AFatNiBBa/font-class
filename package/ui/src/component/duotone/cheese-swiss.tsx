
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cheese-swiss` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese-swiss?s=duotone cheese-swiss}
 * @preview ![cheese-swiss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cheese-swiss.svg)
 */
const CheeseSwiss: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l332.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32L512 256l0-15.8C512 125.2 418.8 32 303.8 32c-10.3 0-20.3 3-28.9 8.7l-47 31.3c-7.8 5.2-9.2 16.1-6.3 25.1c1.5 4.7 2.3 9.7 2.3 14.9c0 26.5-21.5 48-48 48c-12 0-22.9-4.4-31.3-11.6c-7.1-6.1-17.7-9.1-25.5-3.8L28.5 205C11.3 216.5 .8 235.5 0 256zM128 384a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M368 336c26.5 0 48-21.5 48-48c0-12.3-4.6-23.5-12.2-32L512 256l0 160c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 256l332.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 26.5 21.5 48 48 48zM224 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CheeseSwiss;
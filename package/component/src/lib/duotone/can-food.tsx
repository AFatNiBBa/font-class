
import { Icon, generic } from "../../index";

/**
 * A component that renders the `can-food` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/can-food?s=duotone can-food}
 * @preview ![can-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/can-food.svg)
 */
const CanFood: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 64c0 1.3 .1 2.5 .3 3.8C21.7 101.4 98.3 128 192 128s170.3-26.6 175.7-60.2c.2-1.2 .3-2.5 .3-3.8c0-35.3-78.8-64-176-64S16 28.7 16 64zm96 240a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M320 434.3l0-158.9c-14.1 6.1-30.7 11.2-49.2 15C264.4 252.7 231.5 224 192 224s-72.4 28.7-78.8 66.4c-18.5-3.8-35.1-8.9-49.2-15l0 158.9c3.4 3 10.2 7.5 21.7 12.2C110.5 456.6 148.1 464 192 464s81.5-7.4 106.3-17.5c11.5-4.7 18.3-9.2 21.7-12.2zm48 5.7c0 39.8-78.8 72-176 72s-176-32.2-176-72L16 72c0-1.4 .1-2.8 .3-4.2C21.7 101.4 98.3 128 192 128s170.3-26.6 175.7-60.2c.2 1.4 .3 2.8 .3 4.2l0 368z" />
    </Icon>
);

export default CanFood;
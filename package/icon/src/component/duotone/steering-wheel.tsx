
import { Icon, generic } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=duotone steering-wheel}
 * @preview ![steering-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/steering-wheel.svg)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 256c0 10.9 .9 21.6 2.7 32l102.2 0L224 358.9l0 86.5c10.4 1.7 21.1 2.7 32 2.7s21.6-.9 32-2.7l0-86.5L343.1 288l102.2 0c1.7-10.4 2.7-21.1 2.7-32s-.9-21.6-2.7-32L352 224l-7.2-14.3c-5.4-10.8-16.5-17.7-28.6-17.7l-120.4 0c-12.1 0-23.2 6.8-28.6 17.7L160 224l-93.3 0c-1.7 10.4-2.7 21.1-2.7 32z" />
        <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default SteeringWheel;
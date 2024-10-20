
import { Icon, generic } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=sharp-duotone-solid steering-wheel}
 * @preview ![steering-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/steering-wheel.svg)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 256c0 10.9 .9 21.6 2.7 32l102.2 0L224 358.9l0 86.5c10.4 1.7 21.1 2.7 32 2.7s21.6-.9 32-2.7l0-86.5L343.1 288l102.2 0c1.7-10.4 2.7-21.1 2.7-32s-.9-21.6-2.7-32L344 224l-24-32-128 0-24 32L66.7 224c-1.7 10.4-2.7 21.1-2.7 32z" />
        <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default SteeringWheel;
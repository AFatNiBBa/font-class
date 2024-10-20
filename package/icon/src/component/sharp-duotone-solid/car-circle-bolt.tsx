
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-circle-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-circle-bolt?s=sharp-duotone-solid car-circle-bolt}
 * @preview ![car-circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-circle-bolt.svg)
 */
const CarCircleBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 400l0 80 96 0 0-80 226.9 0c-1.9-10.4-2.9-21.1-2.9-32c0-97.2 78.8-176 176-176l-25.3 0L422.2 53.4 414.7 32 392 32 120 32 97.3 32 89.8 53.4 41.3 192 0 192zm128 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-18.9-96l33.6-96 226.6 0 33.6 96-293.8 0zM496 192c5.4 0 10.7 .2 16 .7l0-.7-16 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm64 16l66.7 0L472 448l104-96-66.7 0L520 288 416 384z" />
    </Icon>
);

export default CarCircleBolt;
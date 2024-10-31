
import { Icon, generic } from "../../index";

/**
 * A component that renders the `horse-saddle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horse-saddle?s=sharp-duotone-solid horse-saddle}
 * @preview ![horse-saddle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/horse-saddle.svg)
 */
const HorseSaddle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256c0-44.6 33.2-81.5 76.3-87.2c-3.9 6.4-7 13.4-9.1 20.8c-1.1 3.7-1.9 7.5-2.4 11.4c-.3 1.9-.5 3.9-.6 5.9c-.1 1-.1 2-.2 3s-.1 2-.1 3c0 3.6 .2 7.1 .7 10.7C54.6 230.8 48 242.6 48 256l0 56 0 24L0 336l0-24 0-56zM160 128l160 0 0 48c0 38.7-27.5 71-64 78.4l0 73.6 0 1.1 0 14.9-32 0 0-8 0-8 0-8 0-65.6c-36.5-7.4-64-39.7-64-78.4l0-48z" />
        <path d="M448 238.1l0-78.1 16 0 32 64 80-32 0-128L544 32l16 0 16 0 0-32L560 0 480 0 448 0C377.3 0 320 57.3 320 128l0 48c0 38.7-27.5 71-64 78.4l0 73.6 0 1.1 51.7 14.8c4.1 1.2 8.2 2.1 12.3 2.8L320 512l96 0 0-196.3c19.2-19.2 31.5-45.7 32-75.7c0 0 0 0 0 0l0-1.9zM224 254.4c-36.5-7.4-64-39.7-64-78.4l0-48-11.2 0C102 128 64 166 64 212.8c0 16.8 5 33.1 14.2 47.1l42.4 63.6L94.1 350.1l-21 21 9.4 28.1L120.1 512l101.2 0L182.9 397l27-27L224 355.9l0-11.9 0-8 0-8 0-8 0-65.6zM496 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default HorseSaddle;
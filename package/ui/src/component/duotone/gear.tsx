
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gear` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear?s=duotone gear}
 * @preview ![gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gear.svg)
 */
const Gear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M489.6 191.2c6.9-6.2 9.6-15.9 6.4-24.6c-4.4-11.9-9.7-23.3-15.8-34.3l-4.7-8.1c-6.6-11-14-21.4-22.1-31.2c-5.9-7.2-15.7-9.6-24.5-6.8l-55.7 17.7C359.8 93.6 345 85 329.2 78.4L316.7 21.3c-2-9.1-9-16.3-18.2-17.8C284.7 1.2 270.5 0 256 0s-28.7 1.2-42.5 3.5c-9.2 1.5-16.2 8.7-18.2 17.8L182.8 78.4c-15.8 6.5-30.6 15.1-44 25.4L83.1 86.1c-8.8-2.8-18.6-.3-24.5 6.8c-8.1 9.8-15.5 20.2-22.1 31.2l-4.7 8.1c-6.1 11-11.4 22.4-15.8 34.3c-3.2 8.7-.5 18.4 6.4 24.6l43.3 39.4C64.6 238.9 64 247.4 64 256s.6 17.1 1.7 25.4L22.4 320.8c-6.9 6.2-9.6 15.9-6.4 24.6c4.4 11.9 9.7 23.3 15.8 34.3l4.7 8.1c6.6 11 14 21.4 22.1 31.2c5.9 7.2 15.7 9.6 24.5 6.8l55.7-17.7c13.4 10.3 28.2 18.9 44 25.4l12.5 57.1c2 9.1 9 16.3 18.2 17.8c13.8 2.3 28 3.5 42.5 3.5s28.7-1.2 42.5-3.5c9.2-1.5 16.2-8.7 18.2-17.8l12.5-57.1c15.8-6.5 30.6-15.1 44-25.4l55.7 17.7c8.8 2.8 18.6 .3 24.5-6.8c8.1-9.8 15.5-20.2 22.1-31.2l4.7-8.1c6.1-11 11.4-22.4 15.8-34.3c3.2-8.7 .5-18.4-6.4-24.6l-43.3-39.4c1.1-8.3 1.7-16.8 1.7-25.4s-.6-17.1-1.7-25.4l43.3-39.4zM256 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Gear;
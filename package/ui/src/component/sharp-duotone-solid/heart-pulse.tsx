
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-pulse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-pulse?s=sharp-duotone-solid heart-pulse}
 * @preview ![heart-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/heart-pulse.svg)
 */
const HeartPulse: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 167.8c0 25.8 7.3 50.8 20.8 72.2c35.7 0 71.5 0 107.2 0c11.3-27.1 22.6-54.1 33.8-81.2c7.1-17 14.2-34.1 21.3-51.1c7.6 16.8 15.2 33.7 22.7 50.5c17.1 38 34.2 75.9 51.3 113.9c13.8-27.6 27.6-55.2 41.4-82.8c7.2-14.3 14.3-28.6 21.5-42.9c7.2 14.3 14.3 28.6 21.5 42.9c8.5 16.9 16.9 33.8 25.4 50.7c41.5 0 82.9 0 124.4 0c13.5-21.5 20.8-46.5 20.8-72.2C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8zM64 288c64 64 128 128 192 192c64-64 128-128 192-192c-32 0-64 0-96 0c-4.9 0-9.9 0-14.8 0c-2.2-4.4-4.4-8.8-6.6-13.3c-3.5-7-7-14-10.5-21.1c-14.2 28.4-28.4 56.7-42.5 85.1l-22.6 45.2-20.7-46.1L184.8 228.4c-6.2 15-12.5 29.9-18.7 44.9c-2.1 4.9-4.1 9.8-6.2 14.8c-5.3 0-10.7 0-16 0c-26.7 0-53.3 0-80 0z" />
        <path d="M448 288l-96 0-14.8 0-6.6-13.3L320 253.7l-42.5 85.1-22.6 45.2-20.7-46.1L184.8 228.4l-18.7 44.9L160 288l-16 0-80 0L39.8 263.8c-7.2-7.2-13.6-15.2-19-23.8L128 240l33.8-81.2 21.3-51.1 22.7 50.5 51.3 113.9 41.4-82.8L320 146.3l21.5 42.9L366.8 240l124.4 0c-5.4 8.5-11.7 16.5-19 23.8L448 288z" />
    </Icon>
);

export default HeartPulse;
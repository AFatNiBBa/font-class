
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave?s=sharp-duotone-solid wave}
 * @preview ![wave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wave.svg)
 */
const Wave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 410.6c35 0 66.1-10.8 87.1-20.3c3.2-1.4 6.1-2.9 8.9-4.3c2.8 1.4 5.8 2.8 8.9 4.3c20.9 9.5 52 20.3 87.1 20.3s66.1-10.8 87.1-20.3c3.2-1.4 6.1-2.9 8.9-4.3c2.8 1.4 5.8 2.8 8.9 4.3c20.9 9.5 52 20.3 87.1 20.3s66.1-10.8 87.1-20.3c3.2-1.4 6.1-2.9 8.9-4.3c2.8 1.4 5.8 2.8 8.9 4.3c21 9.5 52 20.3 87.1 20.3l0 69.4c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.6-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9s-60.6-9.9-80.4-18.9c-5.8-2.6-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9s-60.6-9.9-80.4-18.9c-5.8-2.6-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7C60.6 470.1 31.9 480 0 480l0-69.4z" />
        <path d="M0 304H32c35.3 0 64-28.7 64-64C96 125.1 189.1 32 304 32c84.7 0 157.6 50.7 190 123.2l-38.6 27.1C441 168.5 421.5 160 400 160c-44.2 0-80 35.8-80 80c0 35.3 28.7 64 64 64c19.3 0 38.6-6.1 54-13.1c14.9-6.8 26.9-15.4 40-24.7l2.1-1.5 2.1 1.5c13.1 9.3 25.1 18 40 24.7c15.4 7 34.7 13.1 54 13.1v74.6c-28.7 0-55.1-8.9-73.8-17.4c-5.5-2.5-10.3-5-14.5-7.2l-7.6-4.1-7.6 4.1c-4.2 2.3-9.1 4.8-14.5 7.2c-18.7 8.5-45.1 17.4-73.8 17.4s-55.1-8.9-73.8-17.4c-5.5-2.5-10.3-5-14.5-7.2l-7.6-4.1-7.6 4.1c-4.2 2.3-9.1 4.8-14.5 7.2c-18.7 8.5-45.1 17.4-73.8 17.4s-55.1-8.9-73.8-17.4c-5.5-2.5-10.3-5-14.5-7.2L96 349.8l-7.6 4.1c-4.2 2.3-9.1 4.8-14.5 7.2C55.1 369.7 28.7 378.6 0 378.6V304z" />
    </Icon>
);

export default Wave;
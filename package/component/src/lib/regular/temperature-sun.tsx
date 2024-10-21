
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-sun` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-sun?s=regular temperature-sun}
 * @preview ![temperature-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/temperature-sun.svg)
 */
const TemperatureSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320.6 98.5l-2.7-.5L303.8 13.4c-.9-5.4-4.5-10-9.6-12.1s-10.9-1.5-15.4 1.6L208 52.5 137.2 2.9c-4.5-3.2-10.3-3.8-15.4-1.6s-8.7 6.7-9.6 12.1L98.1 98.1 13.4 112.2c-5.4 .9-10 4.5-12.1 9.6s-1.5 10.9 1.6 15.4L52.5 208 2.9 278.8c-3.2 4.5-3.8 10.3-1.6 15.4s6.7 8.7 12.1 9.6l84.7 14.1 14.1 84.7c.9 5.4 4.5 10 9.6 12.1s10.9 1.5 15.4-1.6L208 363.5l70.8 49.6c4.5 3.1 10.3 3.8 15.4 1.6c.7-.3 1.5-.7 2.1-1.1c-5.4-16.9-8.3-35-8.3-53.7c0-37.7 11.8-72.6 32-101.2L320 112c0-4.5 .2-9 .6-13.5zM208 272a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm192 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 161.9c0 14.5 5.7 27.1 12.8 36.6c12 16 19.2 35.9 19.2 57.5c0 53-43 96-96 96s-96-43-96-96c0-21.6 7.1-41.5 19.2-57.5c7.1-9.5 12.8-22.1 12.8-36.6L400 112zM464 0C402.1 0 352 50.2 352 112l0 161.9c0 1.7-.7 4.4-3.2 7.8c-18.1 24.1-28.8 54-28.8 86.4c0 79.5 64.5 144 144 144s144-64.5 144-144c0-32.4-10.7-62.3-28.8-86.4c-2.5-3.4-3.2-6.1-3.2-7.8L576 112C576 50.2 525.9 0 464 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L480 112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 210.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default TemperatureSun;
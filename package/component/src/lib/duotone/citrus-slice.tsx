
import { Icon, generic } from "../../index";

/**
 * A component that renders the `citrus-slice` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus-slice?s=duotone citrus-slice}
 * @preview ![citrus-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/citrus-slice.svg)
 */
const CitrusSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M33.4 371.7c0 6.5 4.1 15.8 7.5 19.3c2.1 2.1 4.2 4.2 6.4 6.1s4.3 3.9 6.5 5.8c4.4 3.8 8.9 7.4 13.4 10.9c9.2 6.9 18.7 13.1 28.5 18.6c19.7 11 40.6 19.1 61.8 24.2c9.7 2.2 18.5-5.3 18.5-15.1l0-177.2c0-6.2-4.3-11.5-10-14c-5.9-2.6-13-2.1-17.6 2.5L35.1 366.3c-1.2 1.2-1.7 3.1-1.7 5.4zM208 262.9l0 185.3c0 8.5 6.6 15.5 15 15.5c.1 0 .3 0 .4 0c50.6-1.4 100.8-18.3 143-50.6c7.3-5.6 7.7-16.3 1.1-22.9L230.9 253.5c-3.7-3.7-9.4-4.4-14.3-2.4s-8.5 6.5-8.5 11.8zM250.5 166c2.5 5.7 7.8 10 14 10l177.2 0c9.9 0 17.4-8.9 15.1-18.5C446.3 114.8 424.4 74.4 391 41c-3.4-3.4-12.8-7.5-19.3-7.5c-2.3 0-4.2 .5-5.4 1.7L253 148.4c-4.6 4.6-5.2 11.7-2.5 17.6zm.6 50.5c-2 4.9-1.4 10.6 2.4 14.3L390.3 367.6c6.5 6.5 17.3 6.2 22.9-1.1c32.3-42.2 49.2-92.5 50.6-143c.2-8.6-6.9-15.5-15.5-15.5L263 208c-5.3 0-9.8 3.7-11.8 8.5z" />
        <path d="M7 391c9.4-9.4 24.6-9.4 33.9 0c96.9 96.9 253.6 97.1 350.4 .3s96.6-253.5-.3-350.4c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c115.6 115.6 116 302.6 .3 418.3S122.6 540.5 7 425c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default CitrusSlice;
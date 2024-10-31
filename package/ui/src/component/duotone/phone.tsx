
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone?s=duotone phone}
 * @preview ![phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/phone.svg)
 */
const Phone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M68.4 14.8c.3 2.3 .6 4.5 .9 6.7c.3 2.2 .6 4.5 1 6.7c.7 4.5 1.4 8.9 2.2 13.3c1.6 8.8 3.4 17.6 5.4 26.2c4.1 17.3 9 34.3 14.9 50.8c11.7 33.1 26.8 64.6 44.9 94c8.3-6.8 16.7-13.6 25-20.5C129.2 136.7 107.2 73.7 99.7 6.3L68.4 14.8zm231 359.6c58.9 36.2 125.9 60.4 197.8 69.1l8.5-31.2c-67.4-7.5-130.4-29.5-185.8-62.9l-20.5 25z" />
        <path d="M68.4 14.8l-39 10.6C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l10.6-39C273.2 416.4 95.6 238.8 68.4 14.8zM505.7 412.3l4.9-17.8c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6l-25.1 30.7c55.4 33.4 118.4 55.4 185.8 62.9zM162.6 192.1L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2L99.7 6.3c7.5 67.4 29.5 130.4 62.9 185.8z" />
    </Icon>
);

export default Phone;
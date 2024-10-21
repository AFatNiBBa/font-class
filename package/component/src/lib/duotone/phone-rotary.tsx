
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=duotone phone-rotary}
 * @preview ![phone-rotary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/phone-rotary.svg)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 141.3c0-8.5 3.4-16.6 9.9-22.1C38.2 95.4 125.9 32 256 32s217.8 63.4 246.1 87.2c6.5 5.5 9.9 13.6 9.9 22.1l0 34.7c0 17.7-14.3 32-32 32l-42.3 0c-13.1 0-24.9-8-29.7-20.1l-19.4-48.6c-2.9-7.3-8.4-13.2-15.7-16c-18.6-7-59.5-19.3-116.8-19.3s-98.2 12.3-116.8 19.3c-7.3 2.8-12.8 8.7-15.7 16L104 187.9C99.2 200 87.4 208 74.3 208L32 208c-17.7 0-32-14.3-32-32l0-34.7zM328 312a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M32 401l0 31c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-31c0-11.1-2.9-22.1-8.4-31.8l-101.1-177C359 172.3 337.8 160 314.9 160l-117.7 0c-23 0-44.2 12.3-55.6 32.2L40.4 369.2C34.9 378.9 32 389.9 32 401zM256 240a72 72 0 1 1 0 144 72 72 0 1 1 0-144z" />
    </Icon>
);

export default PhoneRotary;
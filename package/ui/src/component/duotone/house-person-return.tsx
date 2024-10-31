
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-person-return` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-person-return?s=duotone house-person-return}
 * @preview ![house-person-return](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-person-return.svg)
 */
const HousePersonReturn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 232c0 3.9 .7 7.9 2.2 11.6C7 255.9 18.8 264 32 264l32 0 0 112c0 26.5 21.5 48 48 48l228 0 12.9-51.6c3.2-12.9 9.6-24.8 18.6-34.7l6.8-7.5c-31.2 14.1-68.2 1.2-83.6-29.7c-15.8-31.6-3-70.1 28.6-85.9l10.7-5.4 10.7-25.8c8.9-21.3 22.6-39.7 39.5-54L261.7 16.5c-12.3-11.3-31.2-11.3-43.4 0l-208 192C3.6 214.7 0 223.2 0 232zm144-24c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64z" />
        <path d="M384 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM513.5 199.3c1 .4 1.9 .8 2.9 1.2l8 3.5c16.4 7.3 29 21.2 34.7 38.2l2.6 7.8c5.6 16.8 23.7 25.8 40.5 20.2s25.8-23.7 20.2-40.5l-2.6-7.8c-11.4-34.1-36.6-61.9-69.4-76.5l-8-3.5c-20.8-9.2-43.3-14-66.1-14c-44.6 0-84.8 26.8-101.9 67.9L359 232.7l-21.4 10.7c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3L393 287.3c10.3-5.2 18.4-13.8 22.8-24.5l9.6-23 19.3 65.5-49.5 54c-5.4 5.9-9.2 13-11.2 20.8l-23 92.1c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l22-88.1 70.7-77.1c14.8-16.1 20.3-38.6 14.7-59.7l-16.9-63.5zM571.3 398l-25-62.4c-2.1 3-4.5 5.8-7 8.6l-40.7 44.4 14.5 36.2c2.4 6 6 11.5 10.6 16.1l61.7 61.7c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L571.3 398z" />
    </Icon>
);

export default HousePersonReturn;
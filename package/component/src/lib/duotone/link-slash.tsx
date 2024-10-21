
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=duotone link-slash}
 * @preview ![link-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/link-slash.svg)
 */
const LinkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M17.9 346.5c0 37 14.1 74 42.4 102.3c28 28 65 42.4 102.3 42.4c29.3 0 58.7-8.9 84-26.9l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9L60.2 244.3C32 272.5 17.9 309.5 17.9 346.5zM185.7 120.3c17.7 13.9 35.5 27.8 53.2 41.7c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5c17.7 13.9 35.5 27.8 53.2 41.7C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7zM220.8 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3L220.8 270zM384.5 93.6c10.3 14.4 30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.9 8.6c31.5 31.5 31.5 82.5 0 114l-96 96c16.9 13.3 33.8 26.5 50.7 39.8l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default LinkSlash;
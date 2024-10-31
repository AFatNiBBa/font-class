
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=duotone bell-slash}
 * @preview ![bell-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bell-slash.svg)
 */
const BellSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M98.8 397.1c-5.2-11.5-3.1-25 5.3-34.4l7.4-8.3c31.2-35.1 48.5-80.5 48.5-127.6l0-4.8L406.2 416 128 416c-12.6 0-24-7.4-29.2-18.9zM186 120.5c23-35.1 59.4-60.7 102-69.3L288 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 19.2C425 66 480 130.6 480 208l0 18.8c0 47 17.3 92.4 48.5 127.6l7.4 8.3c5.3 6 8.1 13.6 8.1 21.3c0 4.4-.9 8.9-2.8 13.1c-.2 .4-.4 .9-.6 1.3C422.4 305.8 304.2 213.1 186 120.5zM256 448l64 0 64 0c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default BellSlash;
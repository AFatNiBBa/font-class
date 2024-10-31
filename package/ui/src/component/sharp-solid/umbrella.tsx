
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella?s=sharp-solid umbrella}
 * @preview ![umbrella](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/umbrella.svg)
 */
const Umbrella: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0l0 32 0 17.7C451.8 63.4 557.7 161 573.9 285.9l2.3 18.1L558 304l-6.5 0-7.2 0-4.8-5.3C525 282.3 503.7 272 480 272c-44.2 0-80 35.8-80 80l-16 0-16 0c0-44.2-35.8-80-80-80s-80 35.8-80 80l-16 0-16 0c0-44.2-35.8-80-80-80c-23.7 0-45 10.3-59.6 26.7L31.6 304l-7.2 0L18 304-.2 304l2.3-18.1C18.3 161 124.2 63.4 256 49.7L256 32l0-32 64 0zM256 316.2c8.5-7.6 19.7-12.2 32-12.2s23.5 4.6 32 12.2l0 114.3c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7-14.3-28.6 57.2-28.6 14.3 28.6 2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4l0-114.3z" />
    </Icon>
);

export default Umbrella;
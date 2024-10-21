
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-digging` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-digging?s=duotone person-digging}
 * @preview ![person-digging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-digging.svg)
 */
const PersonDigging: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M9.8 214.8C13.7 205.5 22.6 200 32 200c3.1 0 6.2 .6 9.2 1.9L60.7 210c82.7 34.5 165.4 68.9 248.1 103.4c26.4 11 52.9 22 79.3 33.1l34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c3 5.1 4.6 10.8 4.6 16.5c0 5.4-1.4 10.9-4.2 15.8c-5.7 10-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4z" />
        <path d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM60.6 292.9l32 13.7 112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33zm.1-82.9l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7L60.7 210z" />
    </Icon>
);

export default PersonDigging;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-magnifying-glass?s=duotone music-magnifying-glass}
 * @preview ![music-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/music-magnifying-glass.svg)
 */
const MusicMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M129.8 180.4l148.5-49.5c17.1-5.7 35.8-2.8 50.5 7.7S352 166 352 184l0 208c0 1.3 0 2.5-.1 3.8c.1 1.4 .1 2.8 .1 4.2c0 5.4-.6 10.6-1.8 15.5c40.4-2.7 77.7-17 108.5-39.6L585.4 502.6c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4s9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6L504 330.7c25.2-34.4 40-76.8 40-122.7C544 93.1 450.9 0 336 0C230.5 0 143.3 78.6 129.8 180.4z" />
        <path d="M320 184c0-7.7-3.7-15-10-19.5s-14.3-5.7-21.6-3.3l-192 64C86.6 228.5 80 237.7 80 248l0 48 0 121.5c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48l0-150.7 144-48 0 88.2c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48c0-1.5-.1-3-.3-4.4c.2-1.2 .3-2.4 .3-3.6l0-160 0-48z" />
    </Icon>
);

export default MusicMagnifyingGlass;
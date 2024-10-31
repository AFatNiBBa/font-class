
import { Icon } from "../../index";

/**
 * A component that renders the `ban-bug` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-bug?s=sharp-thin ban-bug}
 * @preview ![ban-bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ban-bug.svg)
 */
const BanBug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496C123.5 496 16 388.5 16 256c0-63.4 24.6-121.1 64.7-164L420 431.3C377.1 471.4 319.4 496 256 496zM92 80.7C134.9 40.6 192.6 16 256 16c132.5 0 240 107.5 240 240c0 63.4-24.6 121.1-64.7 164L92 80.7zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm40.4-159l-15 15-50.7 0L192 329.4l0-80.8-31.6-31.6-30.2-8.6-7.7-2.2-4.4 15.4 7.7 2.2L176 238l0 43-49.1 7-7.9 1.1 2.3 15.8 7.9-1.1 46.9-6.7 0 38.8 .6 .6-37.1 24.7-6.7 4.4 8.9 13.3 6.7-4.4 39.7-26.5L224 384l64 0 19.7-19.7L296.4 353zM224 128l-19.7 19.7L215.6 159l15-15 50.7 0L320 182.6l0 49.2 0 .3 0 31.3 16 16 0-41.4 50.2-14.3 7.7-2.2-4.4-15.4-7.7 2.2L336 221.4l0-45.4-.6-.6 37.1-24.7 6.7-4.4-8.9-13.3-6.7 4.4-39.7 26.5L288 128l-64 0zM385.1 288.1l-47.2-6.7 18.9 18.9 26.1 3.7 7.9 1.1 2.3-15.8-7.9-1.1z" />
    </Icon>
);

export default BanBug;
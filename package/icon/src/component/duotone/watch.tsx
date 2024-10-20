
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=duotone watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M384 256A192 192 0 1 1 0 256a192 192 0 1 1 384 0zM168 176l0 80c0 8 4 15.5 10.7 20l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L216 243.2l0-67.2c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M64 48C64 21.5 85.5 0 112 0L272 0c26.5 0 48 21.5 48 48l0 64.9C286 82.5 241.2 64 192 64s-94 18.5-128 48.9L64 48zM192 448c49.2 0 94-18.5 128-48.9l0 64.9c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-64.9C98 429.5 142.8 448 192 448zm24-272l0 67.2L253.3 268c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32C172 271.5 168 264 168 256l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default Watch;
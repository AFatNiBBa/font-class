
import { Icon, generic } from "../../index";

/**
 * A component that renders the `icons` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icons?s=duotone icons}
 * @preview ![icons](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/icons.svg)
 */
const Icons: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M19.9 119.2l96.9 99.9c6 6.5 16.5 6.5 23 0l96.4-99.9c28-29 26.5-76.9-4.5-103.9C219.2 4.9 204.2 0 189.2 0c-18.8 0-37.6 7.7-51.5 21.8l-9.5 10.5-10-10.5c-25-25.5-66.4-30-93.4-6.5c-31.5 27-33 74.9-5 103.9zM321 389.6c2.3 6.2 8.3 10.4 15 10.4l55.7 0-38.4 89.7c-2.9 6.9-.7 14.9 5.3 19.2s14.3 4 19.9-.9l128-112c5-4.4 6.8-11.4 4.4-17.7s-8.3-10.4-15-10.4l-55.7 0 38.4-89.7c2.9-6.9 .7-14.9-5.3-19.2s-14.3-4-19.9 .9l-128 112c-5 4.4-6.8 11.4-4.4 17.7z" />
        <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32l0 144c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48l0-57L352 90.2 352 208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48l0-96c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2l61.7 0c10.7 0 20.7 5.3 26.6 14.2L213.3 304l42.7 0c17.7 0 32 14.3 32 32l0 144c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32L0 336c0-17.7 14.3-32 32-32l42.7 0zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default Icons;
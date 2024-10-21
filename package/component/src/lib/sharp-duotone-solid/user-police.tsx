
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-police` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-police?s=sharp-duotone-solid user-police}
 * @preview ![user-police](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-police.svg)
 */
const UserPolice: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0-13 1.9-25.5 5.5-37.2c23.9 9.6 62.8 20.1 113.9 21.1c2.7 .1 5.5 .1 8.2 .1l.4 0 .4 0c2.7 0 5.5 0 8.2-.1c51.1-1.1 90.1-11.5 113.9-21.1c3.6 11.8 5.5 24.3 5.5 37.2c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M80 99.2L80 144c16 10.7 67.2 32 144 32s128-21.3 144-32l0-44.8L400 80l0-32L224 0 48 48l0 32L80 99.2zM227 48.6l32 12.8 5 2 0 5.4c0 17.2-7 46.1-36.9 58.6l-3.1 1.3-3.1-1.3C191 114.9 184 86 184 68.8l0-5.4 5-2 32-12.8 3-1.2 3 1.2zM224 416l-85.3-64L48 352 0 512l448 0L400 352l-90.7 0L224 416zm132.6-1.5l6.1 18.8 19.8 0 14.9 0L385.2 442l-16 11.6 6.2 18.8 4.6 14.1-12-8.8-16-11.7-16 11.7-12 8.8 4.6-14.1 6.2-18.8-16-11.6-12.1-8.7 14.9 0 19.8 0 6.1-18.8 4.6-14.2 4.6 14.2z" />
    </Icon>
);

export default UserPolice;
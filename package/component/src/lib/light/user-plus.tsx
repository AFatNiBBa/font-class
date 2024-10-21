
import { Icon } from "../../index";

/**
 * A component that renders the `user-plus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-plus?s=light user-plus}
 * @preview ![user-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-plus.svg)
 */
const UserPlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 80l91.4 0c80 0 145 64.3 146.3 144L32 480c1.2-79.7 66.2-144 146.3-144zm0-32C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zM512 304c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 80z" />
    </Icon>
);

export default UserPlus;
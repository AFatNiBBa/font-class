
import { Icon } from "../../index";

/**
 * A component that renders the `user-cowboy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-cowboy?s=sharp-solid user-cowboy}
 * @preview ![user-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-cowboy.svg)
 */
const UserCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L110 112.4c27.2 8.7 64.7 15.6 114 15.6s86.8-6.9 114-15.6L288 0 224 32 160 0zM83.8 137.1c-32.4-12.7-49.4-27.2-55-34.7L.8 117.1c9.3 27.9 35 62.4 72.5 89.9c7.1 5.2 14.7 10.1 22.7 14.8c0 .8 0 1.5 0 2.3c0 70.7 57.3 128 128 128s128-57.3 128-128c0-.8 0-1.5 0-2.3c8-4.6 15.6-9.6 22.7-14.8c37.6-27.4 63.2-62 72.5-89.9l-28-14.7c-5.6 7.5-22.7 22-55 34.7C332.2 149.6 286.2 160 224 160s-108.2-10.4-140.2-22.9zM400 384L48 384 0 512l448 0L400 384z" />
    </Icon>
);

export default UserCowboy;
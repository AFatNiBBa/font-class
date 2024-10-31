
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-cowboy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-cowboy?s=duotone user-cowboy}
 * @preview ![user-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-cowboy.svg)
 */
const UserCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 221.7c17.4 10.1 36.9 18.7 58.3 24.7c10.7 3 21.9 5.4 33.5 7.1c5.8 .8 11.7 1.4 17.8 1.9c3 .2 6.1 .4 9.1 .5c1.5 .1 3.1 .1 4.6 .1c1.5 0 3 0 4.6 0c50 0 93.2-14.1 128-34.3c0 .8 0 1.5 0 2.3c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-.8 0-1.5 0-2.3z" />
        <path d="M208.5 9.9C201.9 5.4 194 0 176 0c-35.2 0-58.3 58.1-72 110.4C131.6 120 171 128 224 128s92.4-8 120-17.6C330.3 58.1 307.2 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1s-10.8-2.8-15.5-6.1zM28.8 102.4c-4.7-6.3-13.3-8.2-20.2-4.6s-10.2 11.8-7.8 19.2c9.3 27.9 35 62.4 72.5 89.9c38 27.7 89.2 49.1 150.6 49.1s112.7-21.4 150.6-49.1c37.6-27.4 63.2-62 72.5-89.9c2.5-7.4-.8-15.6-7.8-19.2s-15.5-1.7-20.2 4.6c-5.6 7.5-22.6 22-55 34.7C332.2 149.6 286.2 160 224 160s-108.2-10.4-140.2-22.9c-32.4-12.7-49.4-27.2-55-34.7zM100.7 384c-48.4 0-89.3 36.1-95.3 84.1l-1 7.9C2.1 495.1 17 512 36.2 512l375.5 0c19.2 0 34.1-16.9 31.8-36l-1-7.9c-6-48-46.8-84.1-95.3-84.1l-246.5 0z" />
    </Icon>
);

export default UserCowboy;
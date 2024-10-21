
import { Icon } from "../../index";

/**
 * A component that renders the `user-cowboy` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-cowboy?s=solid user-cowboy}
 * @preview ![user-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-cowboy.svg)
 */
const UserCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16c6.7 0 10.8-2.8 15.5-6.1C246.1 5.4 254 0 272 0c35.2 0 58.3 58.1 72 110.4C316.4 120 277 128 224 128s-92.4-8-120-17.6C117.7 58.1 140.8 0 176 0c18 0 25.9 5.4 32.5 9.9c4.7 3.3 8.8 6.1 15.5 6.1zM8.6 97.8c7-3.6 15.5-1.7 20.2 4.6c5.6 7.5 22.7 22 55 34.7C115.8 149.6 161.8 160 224 160s108.2-10.4 140.2-22.9c32.4-12.7 49.4-27.2 55-34.7c4.7-6.3 13.3-8.2 20.2-4.6s10.2 11.8 7.8 19.2c-9.3 27.9-35 62.4-72.5 89.9c-7.1 5.2-14.7 10.1-22.7 14.8c0 .8 0 1.5 0 2.3c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-.8 0-1.5 0-2.3c-8-4.6-15.6-9.6-22.7-14.8C35.8 179.5 10.1 145 .8 117.1c-2.5-7.4 .8-15.6 7.8-19.2zM100.7 384l246.5 0c48.4 0 89.3 36.1 95.3 84.1l1 7.9c2.4 19.1-12.5 36-31.8 36L36.3 512C17 512 2.1 495.1 4.5 476l1-7.9c6-48 46.8-84.1 95.3-84.1z" />
    </Icon>
);

export default UserCowboy;
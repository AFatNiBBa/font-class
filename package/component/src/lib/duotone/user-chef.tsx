
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-chef` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-chef?s=duotone user-chef}
 * @preview ![user-chef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-chef.svg)
 */
const UserChef: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 160l32 0 16 0 160 0 16 0 32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M384 48c0 20.9-13.4 38.7-32 45.3l0 18.7 0 48-32 0-16 0-160 0-16 0-32 0 0-48 0-18.7C77.4 86.7 64 68.9 64 48C64 21.5 85.5 0 112 0c14.3 0 27.2 6.3 36 16.3C156.8 6.3 169.7 0 184 0c16.7 0 31.4 8.5 40 21.5C232.6 8.5 247.3 0 264 0c14.3 0 27.2 6.3 36 16.3C308.8 6.3 321.7 0 336 0c26.5 0 48 21.5 48 48zM178.4 340.6c7.5 1.9 8.2 12.3 1 15.2l-43.2 17.3C111.9 382.8 96 406.3 96 432.5L96 480l0 24 0 8-8 0-24 0-38.4 0C11.5 512 0 500.5 0 486.4c0-58.8 37.7-108.8 90.3-127c3.3-1.2 5.7-4.3 5.7-7.8l0-21.4c0-5.2 4.9-9 9.9-7.8l72.5 18.1zM352 512l-192 0-24 0-8 0 0-8 0-24 0-47.5c0-13.1 8-24.9 20.1-29.7L341 325.6c5.3-2.1 11 1.8 11 7.4l0 18.6c0 3.5 2.3 6.6 5.7 7.8c52.6 18.2 90.3 68.2 90.3 127c0 14.1-11.5 25.6-25.6 25.6L352 512zM224 432a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default UserChef;
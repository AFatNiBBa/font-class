
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-bounty-hunter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-bounty-hunter?s=duotone user-bounty-hunter}
 * @preview ![user-bounty-hunter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-bounty-hunter.svg)
 */
const UserBountyHunter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 16C64 7.2 71.2 0 80 0L96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l0 38c-6.7 10.5-12.2 21.9-16.3 34c-2 6.1-3.7 12.3-4.9 18.6c-.6 3.2-1.1 6.4-1.6 9.7c-.2 1.6-.4 3.3-.6 4.9s-.3 3.3-.4 5L65 256.5c-.2 3.5 0 6.9 .6 10.2c-1-3.4-1.6-7-1.6-10.7L64 16zm49.3 236.6c1.8-27.5 3.5-54.9 5.3-82.4c29 16.3 64.2 48.1 71.9 97.8c-25.7-5.1-51.5-10.3-77.2-15.4zM160 472c0-5 2.4-9.8 6.4-12.8l48-36c5.7-4.3 13.5-4.3 19.2 0l48 36c4 3 6.4 7.8 6.4 12.8l0 40-128 0 0-40zm97.5-204c7.6-49.7 42.9-81.5 71.9-97.8l5.3 82.4L257.5 268z" />
        <path d="M224 48c46 0 85.4 30 99 72L125 120c13.6-42 52.9-72 99-72zm24 123.5l80.5-15.1 6.2 96.2L248 269.9l0-98.4zm-48 0l0 98.4-86.7-17.3 6.2-96.2L200 171.5zM224 0C143.9 0 77.5 62.2 72.3 142.2L65 256.5c-1.3 20 12.4 37.9 32.1 41.8l100.8 20.2c5.2 1 10.4 1.6 15.7 1.6l20.9 0c5.3 0 10.5-.5 15.7-1.6L351 298.3c19.7-3.9 33.4-21.8 32.1-41.8l-7.4-114.3C370.5 62.2 304.1 0 224 0zM0 486.4C0 500.5 11.5 512 25.6 512L160 512l0-40c0-5 2.4-9.8 6.4-12.8l48-36c5.7-4.3 13.5-4.3 19.2 0l48 36c4 3 6.4 7.8 6.4 12.8l0 40 134.4 0c14.1 0 25.6-11.5 25.6-25.6C448 412.2 387.8 352 313.6 352l-179.2 0C60.2 352 0 412.2 0 486.4z" />
    </Icon>
);

export default UserBountyHunter;
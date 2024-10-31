
import { Icon } from "../../index";

/**
 * A component that renders the `user-pilot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pilot?s=sharp-regular user-pilot}
 * @preview ![user-pilot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-pilot.svg)
 */
const UserPilot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80L80 99.2 80 128c16 10.7 67.2 32 144 32s128-21.3 144-32l0-28.8L400 80l0-32L224 0 48 48l0 32zM183.2 65.7L224 86.1l40.8-20.4 14.3-7.2 14.3 28.6-14.3 7.2-48 24-7.2 3.6-7.2-3.6-48-24-14.3-7.2 14.3-28.6 14.3 7.2zM98.1 168.8C96.7 176.3 96 184.1 96 192c0 70.7 57.3 128 128 128s128-57.3 128-128c0-7.9-.7-15.7-2.1-23.2c-14 5.4-28.5 9.9-43.3 13.4c.4 3.2 .6 6.5 .6 9.8c0 46-37.2 83.2-83.2 83.2s-83.2-37.2-83.2-83.2c0-3.3 .2-6.6 .6-9.8c-14.8-3.6-29.3-8.1-43.3-13.4zm97.1 285.6L208 464 64.5 464l19.2-64 39 0 72.5 54.4zM383.5 464L240 464l12.8-9.6L325.3 400l39 0 19.2 64zM400 352l-90.7 0L224 416l-85.3-64L48 352 14.4 464 0 512l50.1 0 347.8 0 50.1 0-14.4-48L400 352z" />
    </Icon>
);

export default UserPilot;
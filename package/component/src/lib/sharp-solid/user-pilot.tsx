
import { Icon } from "../../index";

/**
 * A component that renders the `user-pilot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pilot?s=sharp-solid user-pilot}
 * @preview ![user-pilot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-pilot.svg)
 */
const UserPilot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 99.2L80 128c16 10.7 67.2 32 144 32s128-21.3 144-32l0-28.8L400 80l0-32L224 0 48 48l0 32L80 99.2zm88.8-40.7l14.3 7.2L224 86.1l40.8-20.4 14.3-7.2 14.3 28.6-14.3 7.2-48 24-7.2 3.6-7.2-3.6-48-24-14.3-7.2 14.3-28.6zM98.1 168.8C96.7 176.3 96 184.1 96 192c0 70.7 57.3 128 128 128s128-57.3 128-128c0-7.9-.7-15.7-2.1-23.2C310.8 183.8 268.4 192 224 192s-86.8-8.2-125.9-23.2zM224 416l-85.3-64L48 352 0 512l448 0L400 352l-90.7 0L224 416zm112 0l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0z" />
    </Icon>
);

export default UserPilot;
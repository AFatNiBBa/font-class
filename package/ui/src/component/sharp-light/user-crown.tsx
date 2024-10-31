
import { Icon } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=sharp-light user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M278.2 67.8L293 61.2l27-12 0 62.8-192 0 0-62.8 27 12 14.8 6.6 14.1-8L224 36.9l40.1 22.9 14.1 8zM320 144c0 53-43 96-96 96s-96-43-96-96l192 0zM96 128l0 16c0 70.7 57.3 128 128 128s128-57.3 128-128l0-16 0-93 0-35L320 14.2 280 32 224 0 168 32 128 14.2 96 0l0 35 0 93zM87.6 336l272.7 0 44.3 144L43.3 480 87.6 336zM384 304L64 304 9.8 480 0 512l33.5 0 381 0 33.5 0-9.8-32L384 304z" />
    </Icon>
);

export default UserCrown;
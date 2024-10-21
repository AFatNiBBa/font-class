
import { Icon } from "../../index";

/**
 * A component that renders the `user-ninja` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-ninja?s=sharp-light user-ninja}
 * @preview ![user-ninja](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-ninja.svg)
 */
const UserNinja: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0C352 57.3 294.7 0 224 0C169.6 0 123 34 104.5 81.9L59.3 36.7 48 25.4 25.4 48 36.7 59.3 89.4 112 36.7 164.7 25.4 176 48 198.6l11.3-11.3 38.4-38.4C107.7 209.7 160.4 256 224 256c70.7 0 128-57.3 128-128zM144 304l-8 0c0 0 0 0 0 0l-72 0L9.8 480 0 512l33.5 0L312 512c0 0 0 0 .1 0l102.5 0 33.5 0-9.8-32L384 304l-80 0-57.4 57.4L224 384l-22.6-22.6L144 304zM87.6 336l41.7 0 144 144-230 0L87.6 336zm317 144l-86 0-72.7-72.7 .7-.7L317.3 336l43.1 0 44.3 144zM176 96l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0z" />
    </Icon>
);

export default UserNinja;
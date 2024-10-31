
import { Icon } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=sharp-light user-pen}
 * @preview ![user-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-pen.svg)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM43.3 480L87.6 336l272.7 0 8.6 27.9 25.6-25.6L384 304 64 304 9.8 480 0 512l33.5 0 284.3 0 5-32L43.3 480zm510-210.7l41.5 41.5L572 333.5 530.5 292l22.8-22.8zM398 424.5L507.9 314.6l41.5 41.5L439.5 466l-49.1 7.7 7.7-49.1zM617.4 288.1L553.3 224 368 409.3l-10.8 69.5L352 512l33.2-5.2L454.7 496 617.4 333.3 640 310.7l-22.6-22.6z" />
    </Icon>
);

export default UserPen;
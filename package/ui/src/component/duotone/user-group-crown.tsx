
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-group-crown` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-crown?s=duotone user-group-crown}
 * @preview ![user-group-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-group-crown.svg)
 */
const UserGroupCrown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 128l0 16c0 70.7 57.3 128 128 128s128-57.3 128-128l0-16-32 0-16 0-160 0-16 0-32 0zM359.4 229.3C379 245.9 404.3 256 432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-17.2 0-33.5 3.9-48 10.8L384 144c0 5.4-.3 10.7-.8 16c-2.4 24.3-10.3 47.1-22.4 67c-.5 .8-1 1.6-1.4 2.3zm50.8 90.9C452.9 356.8 480 411.3 480 472l0 8c0 11.7-3.1 22.6-8.6 32l137.8 0c17 0 30.7-13.8 30.7-30.7C640 392.2 567.8 320 478.7 320l-61.4 0c-2.4 0-4.8 .1-7.1 .2z" />
        <path d="M352 80l0 48-32 0-16 0-160 0-16 0-32 0 0-48 0-37.7c0 0 0-.1 0-.1L96 39l0-23c0-8.8 7.2-16 16-16l2.4 0c3.6 0 7.2 1.2 10 3.5L140 16l3 2.4c.3 .2 .6 .4 .8 .6l.1 .1c10.2 7.5 23.8 8.3 34.9 2L209.1 4c4.6-2.6 9.7-4 14.9-4s10.4 1.4 14.9 4l30.2 17.2c11 6.3 24.7 5.5 34.9-2l.1-.1c.3-.2 .6-.4 .8-.6l3-2.4L323.6 3.5c2.8-2.3 6.4-3.5 10-3.5L336 0c8.8 0 16 7.2 16 16l0 23 0 3.2c0 0 0 .1 0 .1L352 80zM0 472c0-92.8 75.2-168 168-168l112 0c92.8 0 168 75.2 168 168l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8z" />
    </Icon>
);

export default UserGroupCrown;
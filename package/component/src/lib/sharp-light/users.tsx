
import { Icon } from "../../index";

/**
 * A component that renders the `users` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=sharp-light users}
 * @preview ![users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/users.svg)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zm128 0A80 80 0 1 0 64 80a80 80 0 1 0 160 0zm96 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM199.8 384l240.4 0L469 480l-298 0 28.8-96zM464 352l-288 0L137.6 480 128 512l33.4 0 317.2 0 33.4 0-9.6-32L464 352zM448 224l121.8 0 36 96 34.2 0L592 192l-148 0c2.6 10.2 4 21 4 32zM196 192L48 192 0 320l34.2 0 36-96L192 224c0-11 1.4-21.8 4-32zM464 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0A80 80 0 1 0 432 80a80 80 0 1 0 160 0z" />
    </Icon>
);

export default Users;

import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=sharp-regular user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 144a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-240 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM72 464l368 0-40-96-288 0L72 464zm8-144l352 0 60 144 20 48-52 0L52 512 0 512l20-48L80 320z" />
    </Icon>
);

export default UserLarge;
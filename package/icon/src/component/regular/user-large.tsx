
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=regular user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 144a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-240 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM49.3 464l413.4 0c-8.3-54.4-55.3-96-112-96l-189.4 0c-56.7 0-103.6 41.6-112 96zM0 481.3C0 392.2 72.2 320 161.3 320l189.4 0C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3z" />
    </Icon>
);

export default UserLarge;
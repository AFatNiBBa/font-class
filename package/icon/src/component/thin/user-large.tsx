
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=thin user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376 136a120 120 0 1 0 -240 0 120 120 0 1 0 240 0zm-256 0a136 136 0 1 1 272 0 136 136 0 1 1 -272 0zM16 481.3c0 8.1 6.6 14.7 14.7 14.7l450.6 0c8.1 0 14.7-6.6 14.7-14.7C496 401 431 336 350.7 336l-189.4 0C81 336 16 401 16 481.3zm-16 0C0 392.2 72.2 320 161.3 320l189.4 0C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3z" />
    </Icon>
);

export default UserLarge;
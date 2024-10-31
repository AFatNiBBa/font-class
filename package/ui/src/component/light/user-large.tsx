
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=light user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 144a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM32 480l448 0c-.7-70.8-58.3-128-129.3-128l-189.4 0C90.3 352 32.7 409.2 32 480zM0 481.3C0 392.2 72.2 320 161.3 320l189.4 0C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3z" />
    </Icon>
);

export default UserLarge;
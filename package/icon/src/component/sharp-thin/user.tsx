
import { Icon } from "../../index";

/**
 * A component that renders the `user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user?s=sharp-thin user}
 * @preview ![user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user.svg)
 */
const User: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM21.7 496l404.7 0L372.2 320 75.8 320 21.7 496zM64 304l320 0 59.1 192 4.9 16-16.7 0L16.7 512 0 512l4.9-16L64 304z" />
    </Icon>
);

export default User;
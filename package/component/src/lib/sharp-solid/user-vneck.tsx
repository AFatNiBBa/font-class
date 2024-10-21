
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=sharp-solid user-vneck}
 * @preview ![user-vneck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-vneck.svg)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0a128 128 0 1 0 0 256A128 128 0 1 0 224 0zm0 432L138.7 304 64 304 0 512l448 0L384 304l-74.7 0L224 432z" />
    </Icon>
);

export default UserVneck;
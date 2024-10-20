
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=solid user-vneck}
 * @preview ![user-vneck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-vneck.svg)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0a128 128 0 1 0 0 256A128 128 0 1 0 224 0zM145.9 314.9c-3.5-5.2-9.8-8-15.9-6.6C55.5 325.5 0 392.3 0 472l0 8c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-8c0-79.7-55.5-146.5-130-163.7c-6.1-1.4-12.4 1.4-15.9 6.6L237.3 412c-6.3 9.5-20.3 9.5-26.6 0l-64.8-97.1z" />
    </Icon>
);

export default UserVneck;
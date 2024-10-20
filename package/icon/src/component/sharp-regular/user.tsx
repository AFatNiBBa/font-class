
import { Icon } from "../../index";

/**
 * A component that renders the `user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user?s=sharp-regular user}
 * @preview ![user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user.svg)
 */
const User: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM65 464l318 0L348.5 352 99.5 352 65 464zM64 304l320 0 49.2 160L448 512l-50.2 0L50.2 512 0 512l14.8-48L64 304z" />
    </Icon>
);

export default User;
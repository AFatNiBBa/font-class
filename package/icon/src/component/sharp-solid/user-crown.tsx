
import { Icon } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=sharp-solid user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 53.7L96 0l48 24 16 8L224 0l64 32 16-8L352 0l0 53.7 0 90.3c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-90.3zM144 128l0 16c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16-160 0zM384 304l64 208L0 512 64 304l320 0z" />
    </Icon>
);

export default UserCrown;
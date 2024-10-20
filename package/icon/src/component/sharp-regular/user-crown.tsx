
import { Icon } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=sharp-regular user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 53.7L96 144c0 70.7 57.3 128 128 128s128-57.3 128-128l0-90.3L352 0 304 24l-16 8L224 0 160 32l-16-8L96 0l0 53.7zM144 128l160 0 0 16c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-16zM99.5 352l249.1 0L383 464 65 464 99.5 352zM384 304L64 304 14.8 464 0 512l50.2 0 347.6 0 50.2 0-14.8-48L384 304z" />
    </Icon>
);

export default UserCrown;
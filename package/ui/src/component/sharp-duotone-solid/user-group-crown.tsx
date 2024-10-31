
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-group-crown` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-crown?s=sharp-duotone-solid user-group-crown}
 * @preview ![user-group-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-group-crown.svg)
 */
const UserGroupCrown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 128l0 16c0 70.7 57.3 128 128 128s128-57.3 128-128l0-16-32 0-16 0-160 0-16 0-32 0zM359.4 229.3C379 245.9 404.3 256 432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-17.2 0-33.5 3.9-48 10.8l0 10.9 0 90.3c0 31.4-9 60.6-24.6 85.3zm63 90.7l56.2 182.6 2.9 9.4L640 512 576 320l-153.6 0z" />
        <path d="M96 53.7L96 0l48 24 16 8L224 0l64 32 16-8L352 0l0 53.7L352 80l0 48-32 0-16 0-160 0-16 0-32 0 0-48 0-26.3zM384 304l64 208L0 512 64 304l320 0z" />
    </Icon>
);

export default UserGroupCrown;
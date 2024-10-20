
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=sharp-duotone-solid user-tag}
 * @preview ![user-tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-tag.svg)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l448 0-8.3-27.1L320 365.3l0-61.3L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M640 384L512 512 352 352l0-96 32-32 96 0L640 384zM432 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default UserTag;
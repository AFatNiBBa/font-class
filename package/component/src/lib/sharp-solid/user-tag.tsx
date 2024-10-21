
import { Icon } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=sharp-solid user-tag}
 * @preview ![user-tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-tag.svg)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM448 512l-8.3-27.1L320 365.3l0-61.3L64 304 0 512l448 0zm64 0L640 384 480 224l-96 0-32 32 0 96L512 512zM408 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default UserTag;

import { Icon } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=sharp-solid user-pen}
 * @preview ![user-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-pen.svg)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM331 417.4L317.4 512 0 512 64 304l320 0 14.2 46.2L331 417.4zM569 223.8l71 71-41.3 41.3-71-71L569 223.8zm-63.9 63.9l71 71L434.9 500 352 511.9 363.9 429 505.1 287.8z" />
    </Icon>
);

export default UserPen;
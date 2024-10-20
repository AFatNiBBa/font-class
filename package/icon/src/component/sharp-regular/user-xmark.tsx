
import { Icon } from "../../index";

/**
 * A component that renders the `user-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=sharp-regular user-xmark}
 * @preview ![user-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-xmark.svg)
 */
const UserXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM65 464l318 0L348.5 352 99.5 352 65 464zM384 304l49.2 160L448 512l-50.2 0L50.2 512 0 512l14.8-48L64 304l160 0 160 0zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM633.9 160l-17 17-47 47 47 47 17 17L600 321.9l-17-17-47-47-47 47-17 17L438.1 288l17-17 47-47-47-47-17-17L472 126.1l17 17 47 47 47-47 17-17L633.9 160z" />
    </Icon>
);

export default UserXmark;
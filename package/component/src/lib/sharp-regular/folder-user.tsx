
import { Icon } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=sharp-regular folder-user}
 * @preview ![folder-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-user.svg)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 101.3 0L176 352l160 0 26.7 80L464 432l0-288-192 0zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default FolderUser;
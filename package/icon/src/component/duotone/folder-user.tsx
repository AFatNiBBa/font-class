
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=duotone folder-user}
 * @preview ![folder-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-user.svg)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96zM144 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7l-202.7 0c-5.9 0-10.7-4.8-10.7-10.7zM320 256a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M256 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-58.7 32c-29.5 0-53.3 23.9-53.3 53.3c0 5.9 4.8 10.7 10.7 10.7l202.7 0c5.9 0 10.7-4.8 10.7-10.7c0-29.5-23.9-53.3-53.3-53.3l-117.3 0z" />
    </Icon>
);

export default FolderUser;
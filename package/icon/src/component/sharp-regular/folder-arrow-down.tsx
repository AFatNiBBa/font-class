
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=sharp-regular folder-arrow-down}
 * @preview ![folder-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-arrow-down.svg)
 */
const FolderArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-192 0zm8 56l0 102.1 31-31 17-17L361.9 288l-17 17-72 72-17 17-17-17-72-72-17-17L184 254.1l17 17 31 31L232 200l0-24 48 0 0 24z" />
    </Icon>
);

export default FolderArrowDown;
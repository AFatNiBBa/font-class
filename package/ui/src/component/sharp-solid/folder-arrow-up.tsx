
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-up?s=sharp-solid folder-arrow-up}
 * @preview ![folder-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-arrow-up.svg)
 */
const FolderArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96l0 384L0 480 0 32l224 0 48 64 240 0zM280 376l0-102.1 31 31 17 17L361.9 288l-17-17-72-72-17-17-17 17-72 72-17 17L184 321.9l17-17 31-31L232 376l0 24 48 0 0-24z" />
    </Icon>
);

export default FolderArrowUp;
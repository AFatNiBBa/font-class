
import { Icon } from "../../index";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=sharp-regular folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-magnifying-glass.svg)
 */
const FolderMagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-192 0zm64 128c0 17.8-4.9 34.5-13.3 48.9L361 359.2l17 17L344 410.1l-17-17-38.4-38.4C274.4 363.2 257.8 368 240 368c-53 0-96-43-96-96s43-96 96-96s96 43 96 96zm-96 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default FolderMagnifyingGlass;
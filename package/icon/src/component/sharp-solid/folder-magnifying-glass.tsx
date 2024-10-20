
import { Icon } from "../../index";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=sharp-solid folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-magnifying-glass.svg)
 */
const FolderMagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM336 272c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c17.8 0 34.4-4.8 48.7-13.2L327 393.1l17 17 33.9-33.9-17-17-38.3-38.3c8.5-14.3 13.3-31 13.3-48.9zm-96-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default FolderMagnifyingGlass;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=sharp-duotone-solid folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-magnifying-glass.svg)
 */
const FolderMagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM144 272c0-53 43-96 96-96s96 43 96 96c0 17.8-4.9 34.5-13.3 48.9L361 359.2l17 17L344 410.1l-17-17-38.4-38.4C274.4 363.2 257.8 368 240 368c-53 0-96-43-96-96zm48 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M322.7 320.9c8.5-14.3 13.3-31 13.3-48.9c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c17.8 0 34.4-4.8 48.7-13.2L327 393.1l17 17 33.9-33.9-17-17-38.3-38.3zM192 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default FolderMagnifyingGlass;
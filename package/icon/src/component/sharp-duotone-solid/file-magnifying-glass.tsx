
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-magnifying-glass?s=sharp-duotone-solid file-magnifying-glass}
 * @preview ![file-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-magnifying-glass.svg)
 */
const FileMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM80 304c0 53 43 96 96 96c17.8 0 34.4-4.8 48.7-13.2L263 425.1l17 17 33.9-33.9-17-17-38.3-38.3c8.5-14.3 13.3-31 13.3-48.9c0-53-43-96-96-96s-96 43-96 96zm144 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M384 160l-160 0L224 0 384 160zM272 304c0 17.8-4.9 34.5-13.3 48.9L297 391.2l17 17L280 442.1l-17-17-38.4-38.4C210.4 395.2 193.8 400 176 400c-53 0-96-43-96-96s43-96 96-96s96 43 96 96zm-96 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default FileMagnifyingGlass;
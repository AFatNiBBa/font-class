
import { Icon } from "../../index";

/**
 * A component that renders the `file-magnifying-glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-magnifying-glass?s=sharp-solid file-magnifying-glass}
 * @preview ![file-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-magnifying-glass.svg)
 */
const FileMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zm16 304c0 17.8-4.9 34.5-13.3 48.9L297 391.2l17 17L280 442.1l-17-17-38.4-38.4C210.4 395.2 193.8 400 176 400c-53 0-96-43-96-96s43-96 96-96s96 43 96 96zm-96 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default FileMagnifyingGlass;

import { Icon } from "../../index";

/**
 * A component that renders the `file-magnifying-glass` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-magnifying-glass?s=solid file-magnifying-glass}
 * @preview ![file-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-magnifying-glass.svg)
 */
const FileMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zm16 304c0 17.8-4.9 34.5-13.3 48.9L297 391.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-38.4-38.4C210.4 395.2 193.8 400 176 400c-53 0-96-43-96-96s43-96 96-96s96 43 96 96zm-96 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default FileMagnifyingGlass;
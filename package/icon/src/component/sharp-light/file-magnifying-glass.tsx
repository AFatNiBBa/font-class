
import { Icon } from "../../index";

/**
 * A component that renders the `file-magnifying-glass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-magnifying-glass?s=sharp-light file-magnifying-glass}
 * @preview ![file-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-magnifying-glass.svg)
 */
const FileMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM176 256a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160c20.7 0 39.9-6.5 55.5-17.7l45.1 45.1L288 454.8l22.6-22.6-11.3-11.3-45.1-45.1C265.4 360 272 340.8 272 320c0-53-43-96-96-96s-96 43-96 96s43 96 96 96z" />
    </Icon>
);

export default FileMagnifyingGlass;
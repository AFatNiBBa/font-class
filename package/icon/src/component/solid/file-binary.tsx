
import { Icon } from "../../index";

/**
 * A component that renders the `file-binary` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-binary?s=solid file-binary}
 * @preview ![file-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-binary.svg)
 */
const FileBinary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48zM96 304l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-48l32 0c8.8 0 16 7.2 16 16l0 112 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-96-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default FileBinary;
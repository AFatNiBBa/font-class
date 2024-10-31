
import { Icon } from "../../index";

/**
 * A component that renders the `file-binary` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-binary?s=regular file-binary}
 * @preview ![file-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-binary.svg)
 */
const FileBinary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm64 240c-30.9 0-56 25.1-56 56l0 64c0 30.9 25.1 56 56 56l16 0c30.9 0 56-25.1 56-56l0-64c0-30.9-25.1-56-56-56l-16 0zm-8 56c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 64c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-64zm120-56c-13.3 0-24 10.7-24 24s10.7 24 24 24l0 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l0-104c0-13.3-10.7-24-24-24l-24 0z" />
    </Icon>
);

export default FileBinary;
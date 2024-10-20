
import { Icon } from "../../index";

/**
 * A component that renders the `file-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-minus?s=sharp-light file-minus}
 * @preview ![file-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-minus.svg)
 */
const FileMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM96 320l-16 0 0 32 16 0 192 0 16 0 0-32-16 0L96 320z" />
    </Icon>
);

export default FileMinus;
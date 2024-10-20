
import { Icon } from "../../index";

/**
 * A component that renders the `file-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-plus?s=sharp-thin file-plus}
 * @preview ![file-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-plus.svg)
 */
const FilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM200 240l-16 0 0 8 0 72-72 0-8 0 0 16 8 0 72 0 0 72 0 8 16 0 0-8 0-72 72 0 8 0 0-16-8 0-72 0 0-72 0-8z" />
    </Icon>
);

export default FilePlus;
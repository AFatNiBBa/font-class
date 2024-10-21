
import { Icon } from "../../index";

/**
 * A component that renders the `file-export` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=sharp-thin file-export}
 * @preview ![file-export](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-export.svg)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M368 352l0 144L16 496 16 16l192 0 0 152 0 8 8 0 152 0 0 80 16 0 0-96L224 0 16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-144-16 0zm-6.6-192L224 160l0-137.4L361.4 160zm92.3 26.3l-5.7-5.7L436.7 192l5.7 5.7L540.7 296 200 296l-8 0 0 16 8 0 340.7 0-98.3 98.3-5.7 5.7L448 427.3l5.7-5.7 112-112 5.7-5.7-5.7-5.7-112-112z" />
    </Icon>
);

export default FileExport;
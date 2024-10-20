
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-ppt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-ppt?s=duotone file-ppt}
 * @preview ![file-ppt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-ppt.svg)
 */
const FilePpt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM304 352c-8.8 0-16 7.2-16 16l0 80 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zM176 352c-8.8 0-16 7.2-16 16l0 80 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm208-64c0 8.8 7.2 16 16 16l16 0 0 112c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0-32 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default FilePpt;
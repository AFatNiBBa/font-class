
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xmark?s=sharp-duotone-solid file-xmark}
 * @preview ![file-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-xmark.svg)
 */
const FileXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM94.1 256c5.7 5.7 11.3 11.3 17 17l47 47c-15.7 15.7-31.3 31.4-47 47c-5.7 5.7-11.3 11.3-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47l47 47 17 17c11.3-11.3 22.6-22.6 33.9-33.9c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.4-47-47l47-47c5.7-5.7 11.3-11.3 17-17c-11.3-11.3-22.6-22.6-33.9-33.9c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.4 31.4-47 47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17c-11.3 11.3-22.6 22.6-33.9 33.9z" />
        <path d="M384 160l-160 0L224 0 384 160zm-94.1 96l-17 17-47 47 47 47 17 17L256 417.9l-17-17-47-47-47 47-17 17L94.1 384l17-17 47-47-47-47-17-17L128 222.1l17 17 47 47 47-47 17-17L289.9 256z" />
    </Icon>
);

export default FileXmark;
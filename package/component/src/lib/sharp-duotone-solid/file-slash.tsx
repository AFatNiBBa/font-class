
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=sharp-duotone-solid file-slash}
 * @preview ![file-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-slash.svg)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0L352 0l0 160 160 0 0 214.7C384 275.4 256 176 128 76.6L128 0zm0 196.8L512 499.4l0 12.6-384 0 0-315.2zM384 0L512 128l-128 0L384 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default FileSlash;
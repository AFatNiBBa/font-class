
import { Icon } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=sharp-regular file-slash}
 * @preview ![file-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-slash.svg)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 464l0-2.4 48 37.8 0 12.6-48 0-288 0-48 0 0-48 0-267.1 48 37.8L176 464l288 0zm48-89.3l108.9 84.6 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L128 76.6 128 48l0-48 48 0L384 0 512 128l0 246.7zm-48-37.3L464 160l-112 0 0-112L176 48l0 65.9L464 337.5z" />
    </Icon>
);

export default FileSlash;
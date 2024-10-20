
import { Icon } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=sharp-solid file-slash}
 * @preview ![file-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-slash.svg)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 76.6L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L512 374.7 512 160l-160 0L352 0 128 0l0 76.6zM128 512l384 0 0-12.6L128 196.9 128 512zM512 128L384 0l0 128 128 0z" />
    </Icon>
);

export default FileSlash;

import { Icon } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=solid file-slash}
 * @preview ![file-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-slash.svg)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376l0-216-128 0c-17.7 0-32-14.3-32-32L352 0 192 0c-35.3 0-64 28.7-64 64l0 11L38.8 5.1zM128 196.9L128 448c0 35.3 28.7 64 64 64l256 0c20.1 0 38.1-9.3 49.8-23.8L128 196.9zM512 128L384 0l0 128 128 0z" />
    </Icon>
);

export default FileSlash;
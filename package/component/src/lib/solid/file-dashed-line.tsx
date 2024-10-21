
import { Icon } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=solid file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 96-384 0 0-192zm0 304l384 0 0 80c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-80zM512 128l-128 0L384 0 512 128zM56 288l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 336c-13.3 0-24-10.7-24-24s10.7-24 24-24zm224 0l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm192 0l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default FileDashedLine;
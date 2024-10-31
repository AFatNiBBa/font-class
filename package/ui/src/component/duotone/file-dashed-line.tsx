
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=duotone file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 64l0 192 384 0 0-96-128 0c-17.7 0-32-14.3-32-32L352 0 192 0c-35.3 0-64 28.7-64 64zm0 304l0 80c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-80-384 0zM384 0l0 128 128 0L384 0z" />
        <path d="M32 312c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 336c-13.3 0-24-10.7-24-24zm224 0c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24zm192 0c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default FileDashedLine;
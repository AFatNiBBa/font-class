
import { Icon } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=regular file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 464l-256 0c-8.8 0-16-7.2-16-16l0-80-48 0 0 80c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-80-48 0 0 80c0 8.8-7.2 16-16 16zm16-304l0 96 48 0 0-101.5c0-17-6.7-33.3-18.7-45.3L402.7 18.7C390.7 6.7 374.5 0 357.5 0L192 0c-35.3 0-64 28.7-64 64l0 192 48 0 0-192c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0zM56 288c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 288zm224 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm192 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
    </Icon>
);

export default FileDashedLine;
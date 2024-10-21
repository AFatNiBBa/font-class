
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-line?s=regular arrows-to-line}
 * @preview ![arrows-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrows-to-line.svg)
 */
const ArrowsToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M241 185l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31L248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1L169 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0zM0 256c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 232c-13.3 0-24 10.7-24 24zm241 71c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31 0 86.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-86.1 31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z" />
    </Icon>
);

export default ArrowsToLine;
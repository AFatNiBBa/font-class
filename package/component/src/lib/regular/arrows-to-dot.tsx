
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-dot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dot?s=regular arrows-to-dot}
 * @preview ![arrows-to-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrows-to-dot.svg)
 */
const ArrowsToDot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1L201 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31L280 24zM433 345c9.4-9.4 9.4-24.6 0-33.9l-31-31 86.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-86.1 0 31-31c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM113 167c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l86.1 0L79 311c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72zM167 433c9.4 9.4 24.6 9.4 33.9 0l31-31 0 86.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-86.1 31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9z" />
    </Icon>
);

export default ArrowsToDot;
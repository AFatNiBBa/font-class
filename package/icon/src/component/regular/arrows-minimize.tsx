
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=regular arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M23 23c9.4-9.4 24.6-9.4 33.9 0l119 119L176 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 144c0 13.3-10.7 24-24 24L56 224c-13.3 0-24-10.7-24-24s10.7-24 24-24l86.1 0L23 57c-9.4-9.4-9.4-24.6 0-33.9zM489 23c9.4 9.4 9.4 24.6 0 33.9l-119 119 86.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24l0 86.1L455 23c9.4-9.4 24.6-9.4 33.9 0zM56 336c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-86.1L57 489c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l119-119L56 336zm232-24c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-86.1 0L489 455c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-119-119 0 86.1c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144z" />
    </Icon>
);

export default ArrowsMinimize;
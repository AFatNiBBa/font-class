
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=regular arrow-down-to-line}
 * @preview ![arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-to-line.svg)
 */
const ArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M360 480c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0zM174.5 344.4c4.5 4.8 10.9 7.6 17.5 7.6s12.9-2.7 17.5-7.6l128-136c9.1-9.7 8.6-24.8-1-33.9s-24.8-8.6-33.9 1L216 267.5l0-83.5 0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 128 0 83.5L81.5 175.6c-9.1-9.7-24.3-10.1-33.9-1s-10.1 24.3-1 33.9l128 136z" />
    </Icon>
);

export default ArrowDownToLine;
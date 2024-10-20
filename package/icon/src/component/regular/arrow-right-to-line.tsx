
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=regular arrow-right-to-line}
 * @preview ![arrow-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-right-to-line.svg)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 336c0 13.3 10.7 24 24 24s24-10.7 24-24l0-336zM312.4 273.5c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-12.9-7.6-17.5l-136-128c-9.7-9.1-24.8-8.6-33.9 1s-8.6 24.8 1 33.9L235.5 232 152 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0 83.5 0-91.9 86.5c-9.7 9.1-10.1 24.3-1 33.9s24.3 10.1 33.9 1l136-128z" />
    </Icon>
);

export default ArrowRightToLine;
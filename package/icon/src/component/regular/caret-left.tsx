
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=regular caret-left}
 * @preview ![caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/caret-left.svg)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M54.6 256L144 166.6l0 178.7L54.6 256zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128z" />
    </Icon>
);

export default CaretLeft;
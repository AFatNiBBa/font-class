
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-large` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-large?s=regular xmark-large}
 * @preview ![xmark-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/xmark-large.svg)
 */
const XmarkLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M41 39C31.6 29.7 16.4 29.7 7 39S-2.3 63.6 7 73l183 183L7 439c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l183-183L407 473c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-183-183L441 73c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-183 183L41 39z" />
    </Icon>
);

export default XmarkLarge;

import { Icon } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=sharp-light dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0L24 0l88 0c6.9 0 13 4.4 15.2 10.9L241.3 353.3c4.8-.9 9.7-1.3 14.7-1.3c34.1 0 63.2 21.3 74.7 51.4L554.5 321l15-5.5 11.1 30-15 5.5L335.9 435.6C334 478.1 299 512 256 512c-44.2 0-80-35.8-80-80c0-27.8 14.1-52.2 35.6-66.6L100.5 32 24 32 8 32 8 0zM304 432a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default DollyEmpty;
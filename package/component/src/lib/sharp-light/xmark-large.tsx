
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-large` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-large?s=sharp-light xmark-large}
 * @preview ![xmark-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/xmark-large.svg)
 */
const XmarkLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M27.3 36.7L16 25.4-6.6 48 4.7 59.3 201.4 256 4.7 452.7-6.6 464 16 486.6l11.3-11.3L224 278.6 420.7 475.3 432 486.6 454.6 464l-11.3-11.3L246.6 256 443.3 59.3 454.6 48 432 25.4 420.7 36.7 224 233.4 27.3 36.7z" />
    </Icon>
);

export default XmarkLarge;
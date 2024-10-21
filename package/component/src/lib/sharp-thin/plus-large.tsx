
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=sharp-thin plus-large}
 * @preview ![plus-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/plus-large.svg)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0-8L248 0l0 8 0 240L8 248l-8 0 0 16 8 0 240 0 0 240 0 8 16 0 0-8 0-240 240 0 8 0 0-16-8 0-240 0L264 8z" />
    </Icon>
);

export default PlusLarge;
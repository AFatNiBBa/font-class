
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=sharp-thin plus}
 * @preview ![plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/plus.svg)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M232 72l0-8-16 0 0 8 0 176L40 248l-8 0 0 16 8 0 176 0 0 176 0 8 16 0 0-8 0-176 176 0 8 0 0-16-8 0-176 0 0-176z" />
    </Icon>
);

export default Plus;
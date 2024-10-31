
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=sharp-light plus}
 * @preview ![plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/plus.svg)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 64l0-16-32 0 0 16 0 176L32 240l-16 0 0 32 16 0 176 0 0 176 0 16 32 0 0-16 0-176 176 0 16 0 0-32-16 0-176 0 0-176z" />
    </Icon>
);

export default Plus;
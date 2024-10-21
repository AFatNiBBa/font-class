
import { Icon } from "../../index";

/**
 * A component that renders the `alt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=sharp-regular alt}
 * @preview ![alt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/alt.svg)
 */
const Alt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 64l-11 0-7.2 8.4L165 400 24 400 0 400l0 48 24 0 152 0 11 0 7.2-8.4L475 112l141 0 24 0 0-48-24 0L464 64zM440 400l-24 0 0 48 24 0 176 0 24 0 0-48-24 0-176 0z" />
    </Icon>
);

export default Alt;
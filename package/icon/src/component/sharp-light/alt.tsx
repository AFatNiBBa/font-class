
import { Icon } from "../../index";

/**
 * A component that renders the `alt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=sharp-light alt}
 * @preview ![alt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/alt.svg)
 */
const Alt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 64l-7.6 0-4.8 5.9L168.4 416 16 416 0 416l0 32 16 0 160 0 7.6 0 4.8-5.9L471.6 96 624 96l16 0 0-32-16 0L464 64zM432 416l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0z" />
    </Icon>
);

export default Alt;
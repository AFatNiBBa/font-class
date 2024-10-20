
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=sharp-light option}
 * @preview ![option](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/option.svg)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 448l-7.6 0-4.8-5.9L168.4 96 16 96 0 96 0 64l16 0 160 0 7.6 0 4.8 5.9L471.6 416 624 416l16 0 0 32-16 0-160 0zM432 96l-16 0 0-32 16 0 192 0 16 0 0 32-16 0L432 96z" />
    </Icon>
);

export default Option;
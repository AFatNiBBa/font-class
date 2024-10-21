
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=sharp-regular option}
 * @preview ![option](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/option.svg)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 64l11 0 7.2 8.4L475 400l141 0 24 0 0 48-24 0-152 0-11 0-7.2-8.4L165 112 24 112 0 112 0 64l24 0 152 0zm440 0l24 0 0 48-24 0-176 0-24 0 0-48 24 0 176 0z" />
    </Icon>
);

export default Option;
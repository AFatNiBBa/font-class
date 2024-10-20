
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=sharp-solid option}
 * @preview ![option](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/option.svg)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 448l-15.4 0L423 436 176.6 128 32 128 0 128 0 64l32 0 160 0 15.4 0L217 76 463.4 384 608 384l32 0 0 64-32 0-160 0zm0-320l-32 0 0-64 32 0 160 0 32 0 0 64-32 0-160 0z" />
    </Icon>
);

export default Option;
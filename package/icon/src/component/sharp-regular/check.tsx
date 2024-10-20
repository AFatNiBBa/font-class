
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=sharp-regular check}
 * @preview ![check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/check.svg)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 130L431 147 177.5 399.2l-16.9 16.9-16.9-16.9L17 273.1 0 256.2l33.9-34 17 16.9L160.6 348.3 397.1 112.9l17-16.9L448 130z" />
    </Icon>
);

export default Check;
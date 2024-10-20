
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=sharp-thin check}
 * @preview ![check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/check.svg)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M443.3 112l-5.7 5.7-272 272-5.7 5.7-5.7-5.7-144-144L4.7 240 16 228.7l5.7 5.7L160 372.7 426.3 106.3l5.7-5.7L443.3 112z" />
    </Icon>
);

export default Check;
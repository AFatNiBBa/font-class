
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=sharp-light check}
 * @preview ![check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/check.svg)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448.1 118.2L437 129.7 173.6 404l-11.5 12-11.5-12L11.1 258.8 0 247.2l23.1-22.2 11.1 11.5L162.1 369.8 414 107.5 425 96l23.1 22.2z" />
    </Icon>
);

export default Check;
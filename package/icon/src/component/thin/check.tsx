
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=thin check}
 * @preview ![check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/check.svg)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M437.7 106.3c3.1 3.1 3.1 8.2 0 11.3l-272 272c-3.1 3.1-8.2 3.1-11.3 0l-144-144c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L160 372.7 426.3 106.3c3.1-3.1 8.2-3.1 11.3 0z" />
    </Icon>
);

export default Check;
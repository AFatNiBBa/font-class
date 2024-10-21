
import { Icon } from "../../index";

/**
 * A component that renders the `right-left-large` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left-large?s=sharp-thin right-left-large}
 * @preview ![right-left-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/right-left-large.svg)
 */
const RightLeftLarge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M188.8 488L28.4 336 188.8 184H240v64H416v64h28.8L588.4 176 444.8 40H416v64H256V88H400V24h51.2L611.6 176 451.2 328H400V264H224V200H195.2L51.6 336 195.2 472H224V408H384v16H240v64H188.8z" />
    </Icon>
);

export default RightLeftLarge;
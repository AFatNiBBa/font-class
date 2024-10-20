
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=regular check}
 * @preview ![check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/check.svg)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default Check;
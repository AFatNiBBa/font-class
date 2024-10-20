
import { Icon } from "../../index";

/**
 * A component that renders the `walker` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=sharp-thin walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M129.7 0L136 0 392 0l8 0 0 8 0 408c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L384 208 95.1 208 23.8 497.9l-1.9 7.8L6.3 501.9l1.9-7.8 120-488L129.7 0zM99 192l285 0 0-176L142.3 16 99 192zM400 496a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Walker;
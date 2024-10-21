
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=sharp-regular arrow-down}
 * @preview ![arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-down.svg)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M175 461.8l17 17 17-17L362.6 308.2l17-17-33.9-33.9-17 17L216 386.9 216 56l0-24-48 0 0 24 0 330.9L55.4 274.2l-17-17L4.5 291.2l17 17L175 461.8z" />
    </Icon>
);

export default ArrowDown;
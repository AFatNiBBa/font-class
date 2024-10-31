
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-arrow-down?s=sharp-regular arrow-up-arrow-down}
 * @preview ![arrow-up-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-arrow-down.svg)
 */
const ArrowUpArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M433 461.8l-17 17-17-17-96-96-17-17L320 314.9l17 17 55 55L392 56l0-24 48 0 0 24 0 330.9 55-55 17-17 33.9 33.9-17 17-96 96zM177 50.2l96 96 17 17L256 197.1l-17-17-55-55L184 456l0 24-48 0 0-24 0-330.9-55 55-17 17L30.1 163.2l17-17 96-96 17-17 17 17z" />
    </Icon>
);

export default ArrowUpArrowDown;
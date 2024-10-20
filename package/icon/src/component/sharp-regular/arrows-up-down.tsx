
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=sharp-regular arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z" />
    </Icon>
);

export default ArrowsUpDown;
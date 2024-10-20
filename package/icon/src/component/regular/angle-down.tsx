
import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=regular angle-down}
 * @preview ![angle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/angle-down.svg)
 */
const AngleDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M241 369c-9.4 9.4-24.6 9.4-33.9 0L47 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 369z" />
    </Icon>
);

export default AngleDown;
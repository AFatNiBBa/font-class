
import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-regular caret-down}
 * @preview ![caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/caret-down.svg)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 192l48 0 0 48L160 384 0 240l0-48 48 0 224 0zM71.8 240L160 319.4 248.2 240 71.8 240z" />
    </Icon>
);

export default CaretDown;
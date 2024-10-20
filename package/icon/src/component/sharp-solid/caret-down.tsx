
import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-solid caret-down}
 * @preview ![caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/caret-down.svg)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 240L160 384 0 240l0-48 320 0 0 48z" />
    </Icon>
);

export default CaretDown;

import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-thin caret-down}
 * @preview ![caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/caret-down.svg)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 232.9L160 362.5 304 232.9l0-24.9L16 208l0 24.9zM160 384L0 240l0-32 0-16 16 0 288 0 16 0 0 16 0 32L160 384z" />
    </Icon>
);

export default CaretDown;
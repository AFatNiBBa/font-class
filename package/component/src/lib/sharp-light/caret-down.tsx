
import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-light caret-down}
 * @preview ![caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/caret-down.svg)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 224L32 224l0 1.7L160 341 288 225.8l0-1.7zm0-32l32 0 0 32 0 16L160 384 0 240l0-16 0-32 32 0 256 0z" />
    </Icon>
);

export default CaretDown;
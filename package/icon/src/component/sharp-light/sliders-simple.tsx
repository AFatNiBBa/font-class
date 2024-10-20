
import { Icon } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=sharp-light sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 416l96 0 0-32 0-32 0-32-96 0 0 96zm128-32l0 32 0 32-32 0-96 0L0 448l0-32 0-96 0-32 32 0 96 0 32 0 0 32 0 32 336 0 16 0 0 32-16 0-336 0zM16 160L0 160l0-32 16 0 336 0 0-32 0-32 32 0 96 0 32 0 0 32 0 96 0 32-32 0-96 0-32 0 0-32 0-32L16 160zM384 96l0 96 96 0 0-96-96 0z" />
    </Icon>
);

export default SlidersSimple;
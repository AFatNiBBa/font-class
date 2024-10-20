
import { Icon } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=sharp-regular sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 400l64 0 0-64-64 0 0 64zM0 448l0-48 0-64 0-48 48 0 64 0 48 0 0 48 0 8 328 0 24 0 0 48-24 0-328 0 0 8 0 48-48 0-64 0L0 448zM24 168L0 168l0-48 24 0 328 0 0-8 0-48 48 0 64 0 48 0 0 48 0 64 0 48-48 0-64 0-48 0 0-48 0-8L24 168zm376-56l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default SlidersSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=sharp-thin sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 432l128 0 0-56 0-16 0-56L16 304l0 128zm144-56l0 56 0 16-16 0L16 448 0 448l0-16L0 304l0-16 16 0 128 0 16 0 0 16 0 56 344 0 8 0 0 16-8 0-344 0zM8 152l-8 0 0-16 8 0 344 0 0-56 0-16 16 0 128 0 16 0 0 16 0 128 0 16-16 0-128 0-16 0 0-16 0-56L8 152zm360 56l128 0 0-128L368 80l0 56 0 16 0 56z" />
    </Icon>
);

export default SlidersSimple;
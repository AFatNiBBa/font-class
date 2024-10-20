
import { Icon } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=regular sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 336a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm76.3 8L488 344c13.3 0 24 10.7 24 24s-10.7 24-24 24l-331.7 0c-10.2 32.5-40.5 56-76.3 56c-44.2 0-80-35.8-80-80s35.8-80 80-80c35.8 0 66.1 23.5 76.3 56zM400 144a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-44.3-24c10.2-32.5 40.5-56 76.3-56c44.2 0 80 35.8 80 80s-35.8 80-80 80c-35.8 0-66.1-23.5-76.3-56L24 168c-13.3 0-24-10.7-24-24s10.7-24 24-24l331.7 0z" />
    </Icon>
);

export default SlidersSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=thin sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 304a64 64 0 1 0 0 128 64 64 0 1 0 0-128zm79.6 56L504 360c4.4 0 8 3.6 8 8s-3.6 8-8 8l-344.4 0c-4 40.4-38.1 72-79.6 72c-44.2 0-80-35.8-80-80s35.8-80 80-80c41.5 0 75.6 31.6 79.6 72zM368 144a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm-15.6-8c4-40.4 38.1-72 79.6-72c44.2 0 80 35.8 80 80s-35.8 80-80 80c-41.5 0-75.6-31.6-79.6-72L8 152c-4.4 0-8-3.6-8-8s3.6-8 8-8l344.4 0z" />
    </Icon>
);

export default SlidersSimple;
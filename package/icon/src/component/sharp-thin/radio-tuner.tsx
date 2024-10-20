
import { Icon } from "../../index";

/**
 * A component that renders the `radio-tuner` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio-tuner?s=sharp-thin radio-tuner}
 * @preview ![radio-tuner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/radio-tuner.svg)
 */
const RadioTuner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M501 19l7.8-1.9L505.1 1.6l-7.8 1.9L6.1 120.2 0 121.7 0 128l0 16 0 96 0 8L0 496l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L42.6 128 501 19zM16 144l480 0 0 96L16 240l0-96zM496 256l0 240L16 496l0-240 480 0zM424 376a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zm-128 0a72 72 0 1 0 144 0 72 72 0 1 0 -144 0zM64 336l0 16 8 0 144 0 8 0 0-16-8 0L72 336l-8 0zm16 64l0 16 8 0 112 0 8 0 0-16-8 0L88 400l-8 0z" />
    </Icon>
);

export default RadioTuner;

import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke?s=sharp-light mars-stroke}
 * @preview ![mars-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mars-stroke.svg)
 */
const MarsStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 0L352 0l0 32 16 0 89.4 0L384 105.4 347.3 68.7 336 57.4 313.4 80l11.3 11.3L361.4 128l-40.7 40.7C290.1 143.3 250.8 128 208 128c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-42.8-15.3-82.1-40.7-112.6L384 150.6l36.7 36.7L432 198.6 454.6 176l-11.3-11.3L406.6 128 480 54.6l0 89.4 0 16 32 0 0-16 0-128 0-16L496 0 368 0zM64 304a144 144 0 1 1 288 0A144 144 0 1 1 64 304z" />
    </Icon>
);

export default MarsStroke;
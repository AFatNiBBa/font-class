
import { Icon } from "../../index";

/**
 * A component that renders the `hand` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand?s=sharp-regular hand}
 * @preview ![hand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hand.svg)
 */
const Hand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 0L192 0l0 24 0 8s0 0 0 0l-56 0-24 0 0 24 0 205.5-7.5-7.5L76.2 225.7l-17-17-17 17L7 260.9l-7 7 0 9.9 0 42.7 0 9.9 7 7 6.9 6.9L106.5 437c48 48 113.1 75 181 75l8.5 0c101.6 0 184-82.4 184-184c0 0 0 0 0 0l0-24 0-184 0-24-24 0-56 0 0-40 0-24-24 0-56 0 0-8 0-24L296 0 216 0zM192 80l0 152 0 24 48 0 0-24 0-152s0 0 0 0l0-24 0-8 32 0 0 8 0 176 0 24 48 0 0-24 0-152 32 0 0 8s0 0 0 0l0 24 0 120 0 24 48 0 0-24 0-88 32 0 0 136s0 0 0 0l0 24 0 24c0 75.1-60.9 136-136 136l-8.5 0c-55.2 0-108.1-21.9-147.1-60.9L48 310.6l0-22.9 11.2-11.2 11.3 11.3 40.8 40.8 17 17 17-17L153 321l7-7 0-9.9 0-224 32 0z" />
    </Icon>
);

export default Hand;
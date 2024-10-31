
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d20` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d20?s=sharp-light dice-d20}
 * @preview ![dice-d20](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dice-d20.svg)
 */
const DiceD20: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 502.9l16 9.1 16-9.1L480 384l0-16s0 0 0 0l0-220.3 0-19.7-15.3-8.7L269.8 7.9 256 0 242.2 7.9 47.3 119.3 32 128l0 19.7L32 368s0 0 0 0l0 16L240 502.9zM104.1 388.4L240 398.8l0 67.2L104.1 388.4zM272 398.8l135.9-10.5L272 466l0-67.2zm176-88.6l-58.7-97.8L448 170.5l0 139.7zM373 184.8L302 63.2l134 76.6-63.1 45zM210 63.2L139 184.8 76 139.7 210 63.2zM122.7 212.4L64 310.2l0-139.7 58.7 41.9zM75 354l69.4-115.6 80.9 127.2L75 354zm98.1-130l165.7 0L256 354.2 173.1 224zm194.5 14.4L437 354 286.7 365.6l80.9-127.2zM171.9 192L256 47.8 340.1 192l-168.3 0z" />
    </Icon>
);

export default DiceD20;
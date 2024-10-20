
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=sharp-light backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M28.8 275.2L0 256l28.8-19.2L256 85.3 288 64l0 38.5 0 95.9L480 83.2 512 64l0 37.3 0 309.4 0 37.3-32-19.2L288 313.6l0 95.9 0 38.5-32-21.3L28.8 275.2zM288 276.3L480 391.5l0-271L288 235.7l0 40.6zM256 388.2l0-264.4L57.7 256 256 388.2z" />
    </Icon>
);

export default Backward;

import { Icon } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=sharp-thin curling-stone}
 * @preview ![curling-stone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/curling-stone.svg)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M184 32l-8 0 0 8 0 120-72 0-8 0 0 8 0 56-32 0L0 288l0 24 0 24 0 80 64 64 448 0 64-64 0-80 0-24 0-24-64-64-32 0 0-56 0-8-8 0-280 0 0-112 216 0 8 0 0-16-8 0L184 32zM464 224l-352 0 0-48 72 0 280 0 0 48zM70.6 240L464 240l16 0 25.4 0L560 294.6l0 17.4 0 24 0 8L16 344l0-8 0-24 0-17.4L70.6 240zM16 360l544 0 0 49.4L505.4 464 70.6 464 16 409.4 16 360z" />
    </Icon>
);

export default CurlingStone;
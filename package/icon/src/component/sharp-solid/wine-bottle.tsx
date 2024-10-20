
import { Icon } from "../../index";

/**
 * A component that renders the `wine-bottle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-bottle?s=sharp-solid wine-bottle}
 * @preview ![wine-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wine-bottle.svg)
 */
const WineBottle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M453 23.8L430.4 1.1 385.1 46.4l11.9 11.9-9.4 9.4-61.8 61.8c-47.3-23.6-106.2-15.7-145.7 23.7L0 333.5 178.5 512 358.7 331.8c39.4-39.4 47.3-98.4 23.7-145.7l61.8-61.8 9.4-9.4 11.9 11.9 45.3-45.3L488.2 59 453 23.8zM112 312L232 192l88 88L200 400l-88-88z" />
    </Icon>
);

export default WineBottle;
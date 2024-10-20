
import { Icon } from "../../index";

/**
 * A component that renders the `house-chimney` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney?s=sharp-regular house-chimney}
 * @preview ![house-chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-chimney.svg)
 */
const HouseChimney: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 .5l15.5 13.2L464 149.9 464 88l0-24 48 0 0 24 0 96 0 6.6 55.5 47.1-31.1 36.6L512 253.5 512 488l0 24-24 0L88 512l-24 0 0-24 0-234.5L39.5 274.3 8.5 237.7l264-224L288 .5zM112 212.8L112 464l80 0 0-168 0-24 24 0 144 0 24 0 0 24 0 168 80 0 0-251.2L288 63.5 112 212.8zM336 320l-96 0 0 144 96 0 0-144z" />
    </Icon>
);

export default HouseChimney;
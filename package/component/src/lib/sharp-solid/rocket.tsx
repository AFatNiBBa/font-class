
import { Icon } from "../../index";

/**
 * A component that renders the `rocket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=sharp-solid rocket}
 * @preview ![rocket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rocket.svg)
 */
const Rocket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M111.9 340.2l58.2 58.2s22.4-6.8 53.9-17.7L224 512l160-80 0-120c4-2.4 7.8-4.8 11.3-7.2C527.1 215.4 519.9 78.3 502.7 9.3c-68.9-17.2-206-24.5-295.4 107.4c-2.4 3.5-4.8 7.3-7.2 11.3L80 128 0 287.6l129.8 .3c-11 30.7-17.9 52.3-17.9 52.3zM384 88a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default Rocket;
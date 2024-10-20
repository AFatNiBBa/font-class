
import { Icon } from "../../index";

/**
 * A component that renders the `house-chimney` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney?s=sharp-light house-chimney}
 * @preview ![house-chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-chimney.svg)
 */
const HouseChimney: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 2.7L298.6 12 384 87.4 384 48l0-16 16 0 96 0 16 0 0 16 0 152-.3 0 58.9 52-21.2 24L512 243l0 253 0 16-16 0L80 512l-16 0 0-16 0-253L26.6 276 5.4 252l272-240L288 2.7zM480 172.1L480 64l-64 0 0 51.6 64 56.5zM96 214.7L96 480l112 0 0-176c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16l0 176 112 0 0-265.3L288 45.3 96 214.7zM336 480l0-160-96 0 0 160 96 0z" />
    </Icon>
);

export default HouseChimney;
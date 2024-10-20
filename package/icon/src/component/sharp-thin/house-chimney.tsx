
import { Icon } from "../../index";

/**
 * A component that renders the `house-chimney` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney?s=sharp-thin house-chimney}
 * @preview ![house-chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-chimney.svg)
 */
const HouseChimney: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 5.5l5.2 4.5L384 87.7 384 40l0-8 8 0 112 0 8 0 0 8 0 157.5 61.2 52.5-10.4 12.1L512 218.5 512 504l0 8-8 0L72 512l-8 0 0-8 0-285.5L13.2 262.1 2.8 249.9l280-240L288 5.5zM496 183.7L496 48l-96 0 0 53.5 96 82.3zM80 204.8L80 496l128 0 0-184 0-8 8 0 144 0 8 0 0 8 0 184 128 0 0-291.2L288 26.5 80 204.8zM352 496l0-176-128 0 0 176 128 0z" />
    </Icon>
);

export default HouseChimney;
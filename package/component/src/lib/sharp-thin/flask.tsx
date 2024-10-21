
import { Icon } from "../../index";

/**
 * A component that renders the `flask` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=sharp-thin flask}
 * @preview ![flask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/flask.svg)
 */
const Flask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 219.9l2.8 4.1 66.4 96L90.7 320l66.4-96 2.8-4.1 0-5L160 16l128 0 0 198.9 0 5zM368.3 336L432 427.9l0 68.1L16 496l0-68.1L79.7 336l.3 0 288 0 .3 0zM304 214.9L304 16l24 0 8 0 0-16-8 0L304 0 288 0 160 0 144 0 120 0l-8 0 0 16 8 0 24 0 0 198.9L0 422.9 0 496l0 16 16 0 416 0 16 0 0-16 0-73.1-144-208z" />
    </Icon>
);

export default Flask;
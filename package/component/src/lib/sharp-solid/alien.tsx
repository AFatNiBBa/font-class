
import { Icon } from "../../index";

/**
 * A component that renders the `alien` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=sharp-solid alien}
 * @preview ![alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/alien.svg)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C100.3 0 0 100.3 0 224C0 400 224 512 224 512s224-112 224-288C448 100.3 347.7 0 224 0zm32 304c0-44.2 35.8-80 80-80l48 0 0 16c0 44.2-35.8 80-80 80l-48 0 0-16zM112 224c44.2 0 80 35.8 80 80l0 16-48 0c-44.2 0-80-35.8-80-80l0-16 48 0z" />
    </Icon>
);

export default Alien;
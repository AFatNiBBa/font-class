
import { Icon } from "../../index";

/**
 * A component that renders the `ban` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban?s=thin ban}
 * @preview ![ban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ban.svg)
 */
const Ban: typeof Icon = x => (
    <Icon {...x}>
        <path d="M420 431.3L80.7 92C40.6 134.9 16 192.6 16 256c0 132.5 107.5 240 240 240c63.4 0 121.1-24.6 164-64.7zM431.3 420C471.4 377.1 496 319.4 496 256C496 123.5 388.5 16 256 16C192.6 16 134.9 40.6 92 80.7L431.3 420zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default Ban;
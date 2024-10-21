
import { Icon } from "../../index";

/**
 * A component that renders the `moon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon?s=sharp-solid moon}
 * @preview ![moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/moon.svg)
 */
const Moon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M287.6 41.2c-82.8 21.2-144 96.5-144 186c0 106 85.8 192 191.5 192c16.8 0 33.1-2.2 48.6-6.2c-40.6 41.4-97.2 67-159.8 67C100.3 480 0 379.7 0 256S100.3 32 224 32c22.1 0 43.5 3.2 63.6 9.2z" />
    </Icon>
);

export default Moon;
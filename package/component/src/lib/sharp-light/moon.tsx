
import { Icon } from "../../index";

/**
 * A component that renders the `moon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon?s=sharp-light moon}
 * @preview ![moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/moon.svg)
 */
const Moon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M287.6 41.2c-19.7-5.8-40.6-9-62.2-9.2c-.5 0-1 0-1.5 0C100.3 32 0 132.3 0 256S100.3 480 224 480c40 0 77.5-10.5 110-28.8c.4-.2 .8-.5 1.2-.7c17.9-10.3 34.3-22.9 48.6-37.6c-15.5 4.1-31.8 6.2-48.6 6.2c-3.2 0-6.4-.1-9.6-.2c-101.3-5-181.9-89-181.9-191.8c0-68.7 36-129 90.2-163c16.4-10.3 34.5-18.1 53.8-23.1zM175.9 70.1c-39.7 40.4-64.2 95.9-64.2 157.1c0 101.6 67.5 187.4 160 214.8c-15.2 3.9-31.2 6-47.7 6C118 448 32 362 32 256C32 166.6 93.1 91.4 175.9 70.1z" />
    </Icon>
);

export default Moon;
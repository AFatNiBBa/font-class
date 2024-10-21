
import { Icon } from "../../index";

/**
 * A component that renders the `blueberries` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blueberries?s=sharp-regular blueberries}
 * @preview ![blueberries](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/blueberries.svg)
 */
const Blueberries: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 176C512 78.8 433.2 0 336 0C255.4 0 187.4 54.2 166.6 128.2c3.1-.1 6.3-.2 9.4-.2c114.9 0 208 93.1 208 208c0 3.2-.1 6.3-.2 9.4C457.8 324.6 512 256.6 512 176zM384 64l0 32 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0 0 16zM176 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm0-256l0-16-32 0 0 16 0 32-32 0-16 0 0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-32z" />
    </Icon>
);

export default Blueberries;
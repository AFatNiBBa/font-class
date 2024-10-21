
import { Icon } from "../../index";

/**
 * A component that renders the `socks` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/socks?s=sharp-light socks}
 * @preview ![socks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/socks.svg)
 */
const Socks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0L160 0 128 0l0 32 0 64 0 16 0 16 0 144L38.4 339.2C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l21.6-16.2c-5.2-9.7-9.2-20.1-11.8-31.1l-29 21.8 19.2 25.6-19.2-25.6C123.3 475.5 109.8 480 96 480c-35.3 0-64-28.7-64-64c0-20.1 9.5-39.1 25.6-51.2l89.6-67.2L160 288l0-16 0-144 128 0 0-32L160 96l0-64 128 0 0-32zm64 128l128 0 0 224L326.4 467.2C315.3 475.5 301.8 480 288 480c-35.3 0-64-28.7-64-64c0-20.1 9.5-39.1 25.6-51.2l89.6-67.2L352 288l0-16 0-144zM288 512c20.8 0 41-6.7 57.6-19.2L512 368l0-240 0-16 0-16 0-64 0-32L480 0 352 0 320 0l0 32 0 64 0 16 0 16 0 144-89.6 67.2C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96zM352 96l0-64 128 0 0 64L352 96z" />
    </Icon>
);

export default Socks;
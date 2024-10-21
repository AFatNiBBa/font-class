
import { Icon } from "../../index";

/**
 * A component that renders the `socks` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/socks?s=sharp-solid socks}
 * @preview ![socks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/socks.svg)
 */
const Socks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 64L128 64l0-64L288 0zm0 96l0 160-76.8 57.6C179 337.8 160 375.7 160 416c0 21.9 5.5 42.6 15.2 60.6l-21.6 16.2C137 505.3 116.8 512 96 512c-53 0-96-43-96-96c0-30.2 14.2-58.7 38.4-76.8L128 272l0-176 160 0zm32 0l192 0 0 272L345.6 492.8C329 505.3 308.8 512 288 512c-53 0-96-43-96-96c0-30.2 14.2-58.7 38.4-76.8L320 272l0-176zM512 64L320 64l0-64L512 0l0 64z" />
    </Icon>
);

export default Socks;
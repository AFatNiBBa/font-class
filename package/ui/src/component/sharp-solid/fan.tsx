
import { Icon } from "../../index";

/**
 * A component that renders the `fan` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fan?s=sharp-solid fan}
 * @preview ![fan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fan.svg)
 */
const Fan: typeof Icon = x => (
    <Icon {...x}>
        <path d="M273.2 148.3L288 0C197.1 0 127.6 70.8 128 160c.1 28 7.4 55 20.3 78.8L0 224c0 90.9 70.8 160.4 160 160c28-.1 55-7.4 78.8-20.3L224 512c90.9 0 160.4-70.8 160-160c-.1-28-7.4-55-20.3-78.8L512 288c0-90.9-70.8-160.4-160-160c-28 .1-55 7.4-78.8 20.3zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Fan;
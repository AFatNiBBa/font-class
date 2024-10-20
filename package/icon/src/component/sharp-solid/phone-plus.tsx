
import { Icon } from "../../index";

/**
 * A component that renders the `phone-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-plus?s=sharp-solid phone-plus}
 * @preview ![phone-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-plus.svg)
 */
const PhonePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 0L32 32l0 32c0 247.4 200.6 448 448 448l32 0 32-144L400 288l-67 83.8C264.5 335.7 208.3 279.5 172.2 211L256 144 176 0zM424 224l48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24L424 0l0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64 0 24z" />
    </Icon>
);

export default PhonePlus;
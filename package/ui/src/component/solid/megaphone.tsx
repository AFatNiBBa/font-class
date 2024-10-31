
import { Icon } from "../../index";

/**
 * A component that renders the `megaphone` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=solid megaphone}
 * @preview ![megaphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/megaphone.svg)
 */
const Megaphone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 32c17.7 0 32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-384c0-17.7 14.3-32 32-32zM64 190.3L480 64l0 384L348.9 408.2C338.2 449.5 300.7 480 256 480c-53 0-96-43-96-96c0-11 1.9-21.7 5.3-31.5L64 321.7C63.1 338.6 49.1 352 32 352c-17.7 0-32-14.3-32-32L0 192c0-17.7 14.3-32 32-32c17.1 0 31.1 13.4 32 30.3zm239 203.9l-91.6-27.8c-2.1 5.4-3.3 11.4-3.3 17.6c0 26.5 21.5 48 48 48c23 0 42.2-16.2 46.9-37.8z" />
    </Icon>
);

export default Megaphone;
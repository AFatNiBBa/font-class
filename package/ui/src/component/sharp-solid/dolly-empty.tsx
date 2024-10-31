
import { Icon } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=sharp-solid dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 0L0 0 0 64l32 0 72.9 0L197 340.2c-22.5 17.6-37 45-37 75.8c0 53 43 96 96 96c52.4 0 95.1-42 96-94.3l202.1-67.4 30.4-10.1-20.2-60.7-30.4 10.1L331.8 357c-17.2-22.1-43.9-36.5-74-37L158.4 21.9 151.1 0 128 0 32 0z" />
    </Icon>
);

export default DollyEmpty;
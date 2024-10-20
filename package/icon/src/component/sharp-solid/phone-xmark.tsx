
import { Icon } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=sharp-solid phone-xmark}
 * @preview ![phone-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-xmark.svg)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 0L32 32l0 32c0 247.4 200.6 448 448 448l32 0 32-144L400 288l-67 83.8C264.5 335.7 208.3 279.5 172.2 211L256 144 176 0zm362 40L504 6.1 487 23l-47 47L393 23l-17-17L342.1 40l17 17 47 47-47 47-17 17L376 201.9l17-17 47-47 47 47 17 17L537.9 168l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default PhoneXmark;
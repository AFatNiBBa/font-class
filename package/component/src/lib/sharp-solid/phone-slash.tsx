
import { Icon } from "../../index";

/**
 * A component that renders the `phone-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-slash?s=sharp-solid phone-slash}
 * @preview ![phone-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-slash.svg)
 */
const PhoneSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M250.4 279.6L591.5 14.8l19-14.7L639.9 38l-19 14.7L48.4 497.2l-19 14.7L0 474l19-14.7L164.2 346.5C101.5 269.5 63.9 171.1 63.9 64l0-32 144-32 80 144-83.8 67c13 24.6 28.5 47.5 46.3 68.6zm-16.1 136l88.4-69.7c13.4 9.5 27.5 18.1 42.2 25.9l67-83.8 144 80-32 144-32 0c-104.9 0-201.3-36-277.6-96.4z" />
    </Icon>
);

export default PhoneSlash;
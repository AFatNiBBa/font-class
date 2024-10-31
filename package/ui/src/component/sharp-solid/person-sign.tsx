
import { Icon } from "../../index";

/**
 * A component that renders the `person-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-sign?s=sharp-solid person-sign}
 * @preview ![person-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-sign.svg)
 */
const PersonSign: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 48a48 48 0 1 1 96 0A48 48 0 1 1 96 48zM84.7 128l19.3 0 88 0 14.4 0 9.5 10.7 58.7 66.1 43.6 16.3 15.9-43.7L256 148.4 308.8 0 388 29.5l9.9-27.1L443 18.8 433 46.2l79 29.4L459.2 224l-80-29.8-45 123.7-8.2 22.6L280.8 324l8.2-22.6 7.3-20.1L244.8 262l-7.4-2.8-5.3-5.9L216 235.2l0 77.3 36.6 73.2 3.4 6.8 0 7.6 0 80 0 32-64 0 0-32 0-72.4L164.2 352 144 352l0 128 0 32-64 0 0-32 0-206.3L60.3 311 3.7 281l72-136 9-17z" />
    </Icon>
);

export default PersonSign;
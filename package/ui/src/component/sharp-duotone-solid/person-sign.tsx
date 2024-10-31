
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-sign?s=sharp-duotone-solid person-sign}
 * @preview ![person-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-sign.svg)
 */
const PersonSign: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 148.4l78.2 29.1c-5.3 14.6-10.6 29.1-15.9 43.7l-21.9 60.1c-2.4 6.7-4.9 13.4-7.3 20.1L280.8 324l45.1 16.4 8.2-22.6 45-123.7 80 29.8L512 75.6 433 46.2l10-27.4L397.9 2.4 388 29.5 308.8 0 256 148.4z" />
        <path d="M144 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-40 32l-19.3 0-9 17L3.7 281 60.3 311 80 273.7 80 480l0 32 64 0 0-32 0-128 20.2 0L192 407.6l0 72.4 0 32 64 0 0-32 0-80 0-7.6-3.4-6.8L216 312.4l0-77.3 16.1 18.1 5.3 5.9 7.4 2.8 51.6 19.3 21.9-60.1-43.6-16.3-58.7-66.1L206.4 128 192 128l-88 0z" />
    </Icon>
);

export default PersonSign;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-exclamation?s=sharp-duotone-solid rotate-exclamation}
 * @preview ![rotate-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rotate-exclamation.svg)
 */
const RotateExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272L0 432l57.6-57.6 40 40C141.3 458.1 198.7 480 256 480s114.7-21.9 158.4-65.6c24.4-24.4 42.1-53.1 52.9-83.7l-60.4-21.3c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-40-40L160 272 0 272zm44.8-90.6l60.4 21.3c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0l40 40L352 240l160 0 0-160-57.6 57.6-40-40c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4z" />
        <path d="M280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default RotateExclamation;
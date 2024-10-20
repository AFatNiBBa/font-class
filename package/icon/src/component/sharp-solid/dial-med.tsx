
import { Icon } from "../../index";

/**
 * A component that renders the `dial-med` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-med?s=sharp-solid dial-med}
 * @preview ![dial-med](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dial-med.svg)
 */
const DialMed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0l0 64-64 0 0-64 64 0zM128 64l0 64-64 0 0-64 64 0zm384 0l0 64-64 0 0-64 64 0zm0 192l64 0 0 64-64 0 0-64zm0 192l0 64-64 0 0-64 64 0zM64 448l64 0 0 64-64 0 0-64zM0 256l64 0 0 64L0 320l0-64zm128 31.2C128 207 187 140.6 264 129l0 158.2 0 24 48 0 0-24L312 129c77 11.6 136 78 136 158.2c0 88.4-71.6 160-160 160s-160-71.6-160-160z" />
    </Icon>
);

export default DialMed;
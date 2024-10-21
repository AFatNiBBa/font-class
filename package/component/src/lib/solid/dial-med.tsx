
import { Icon } from "../../index";

/**
 * A component that renders the `dial-med` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-med?s=solid dial-med}
 * @preview ![dial-med](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dial-med.svg)
 */
const DialMed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 287.2C128 207 187 140.6 264 129l0 158.2c0 13.3 10.7 24 24 24s24-10.7 24-24L312 129c77 11.6 136 78 136 158.2c0 88.4-71.6 160-160 160s-160-71.6-160-160zm384 .8a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 96a32 32 0 1 1 64 0A32 32 0 1 1 64 96zM480 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DialMed;
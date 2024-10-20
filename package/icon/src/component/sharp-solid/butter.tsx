
import { Icon } from "../../index";

/**
 * A component that renders the `butter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=sharp-solid butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64l384 0 0 224L64 288 64 64zM32 320l576 0 32 0 0 64-32 0 0 64L32 448l0-64L0 384l0-64 32 0zM576 64l0 224-96 0 0-224 96 0z" />
    </Icon>
);

export default Butter;
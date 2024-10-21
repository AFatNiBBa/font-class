
import { Icon } from "../../index";

/**
 * A component that renders the `butter` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=solid butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 128c0-35.3 28.7-64 64-64l320 0 0 224L64 288l0-160zM32 320l576 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32s14.3-32 32-32zM512 64c35.3 0 64 28.7 64 64l0 160-96 0 0-224 32 0z" />
    </Icon>
);

export default Butter;
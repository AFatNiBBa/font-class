
import { Icon } from "../../index";

/**
 * A component that renders the `u` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=solid u}
 * @preview ![u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/u.svg)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32c17.7 0 32 14.3 32 32l0 224c0 70.7 57.3 128 128 128s128-57.3 128-128l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 224c0 106-86 192-192 192S0 394 0 288L0 64C0 46.3 14.3 32 32 32z" />
    </Icon>
);

export default U;
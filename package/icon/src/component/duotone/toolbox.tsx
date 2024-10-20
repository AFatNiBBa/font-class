
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=duotone toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l128 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 128 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 128 0 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-96zM128 88c0-30.9 25.1-56 56-56l144 0c30.9 0 56 25.1 56 56l0 40-48 0 0-40c0-4.4-3.6-8-8-8L184 80c-4.4 0-8 3.6-8 8l0 40-48 0 0-40z" />
        <path d="M0 320l0-85.5c0-17 6.7-33.3 18.7-45.3l42.5-42.5c12-12 28.3-18.7 45.3-18.7l299 0c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3l0 85.5-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L0 320z" />
    </Icon>
);

export default Toolbox;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `shower-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shower-down?s=duotone shower-down}
 * @preview ![shower-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shower-down.svg)
 */
const ShowerDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 350.8l0 1.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.2c0-4.5-.9-8.9-2.7-13.1L75.2 295.4c-1.9-4.5-6.3-7.4-11.2-7.4s-9.2 2.9-11.2 7.4L34.7 337.7c-1.8 4.1-2.7 8.6-2.7 13.1zm64 128l0 1.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.2c0-4.5-.9-8.9-2.7-13.1l-18.2-42.4c-1.9-4.5-6.3-7.4-11.2-7.4s-9.2 2.9-11.2 7.4L98.7 465.7c-1.8 4.1-2.7 8.6-2.7 13.1zm64-128l0 1.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.2c0-4.5-.9-8.9-2.7-13.1l-18.2-42.4c-1.9-4.5-6.3-7.4-11.2-7.4s-9.2 2.9-11.2 7.4l-18.2 42.4c-1.8 4.1-2.7 8.6-2.7 13.1zm64 128l0 1.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.2c0-4.5-.9-8.9-2.7-13.1l-18.2-42.4c-1.9-4.5-6.3-7.4-11.2-7.4s-9.2 2.9-11.2 7.4l-18.2 42.4c-1.8 4.1-2.7 8.6-2.7 13.1zm64-128l0 1.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.2c0-4.5-.9-8.9-2.7-13.1l-18.2-42.4c-1.9-4.5-6.3-7.4-11.2-7.4s-9.2 2.9-11.2 7.4l-18.2 42.4c-1.8 4.1-2.7 8.6-2.7 13.1z" />
        <path d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 3.2C87 50 32 114.6 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32c0-77.4-55-142-128-156.8l0-3.2z" />
    </Icon>
);

export default ShowerDown;
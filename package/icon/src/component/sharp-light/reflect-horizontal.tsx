
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=sharp-light reflect-horizontal}
 * @preview ![reflect-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/reflect-horizontal.svg)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0l0 16 0 480 0 16-32 0 0-16 0-480 0-16 32 0zM169.4 233.4L192 256l-22.6 22.6L32 416 0 416l0-32L0 128 0 96l32 0L169.4 233.4zM32 370.7L146.7 256 32 141.3l0 229.5zM320 256l22.6-22.6L480 96l32 0 0 32 0 256 0 32-32 0L342.6 278.6 320 256zm45.3 0L480 370.7l0-229.5L365.3 256z" />
    </Icon>
);

export default ReflectHorizontal;
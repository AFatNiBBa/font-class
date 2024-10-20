
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=sharp-light reflect-both}
 * @preview ![reflect-both](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/reflect-both.svg)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 169.4L256 192l-22.6-22.6L96 32 96 0l32 0L384 0l32 0 0 32L278.6 169.4zM370.7 32L141.3 32 256 146.7 370.7 32zM192 256l-22.6 22.6L32 416 0 416l0-32L0 128 0 96l32 0L169.4 233.4 192 256zm-45.3 0L32 141.3l0 229.5L146.7 256zM320 256l22.6-22.6L480 96l32 0 0 32 0 256 0 32-32 0L342.6 278.6 320 256zm45.3 0L480 370.7l0-229.5L365.3 256zM256 320l22.6 22.6L416 480l0 32-32 0-256 0-32 0 0-32L233.4 342.6 256 320zm0 45.3L141.3 480l229.5 0L256 365.3z" />
    </Icon>
);

export default ReflectBoth;

import { Icon } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=sharp-solid reflect-both}
 * @preview ![reflect-both](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/reflect-both.svg)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32L256 192 416 32l0-32L96 0l0 32zm96 224L32 96 0 96 0 416l32 0L192 256zm128 0L480 416l32 0 0-320-32 0L320 256zm-64 64L96 480l0 32 320 0 0-32L256 320z" />
    </Icon>
);

export default ReflectBoth;
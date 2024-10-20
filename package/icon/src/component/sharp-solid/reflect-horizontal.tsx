
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=sharp-solid reflect-horizontal}
 * @preview ![reflect-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/reflect-horizontal.svg)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0L232 0l0 24 0 464 0 24 48 0 0-24 0-464 0-24zM32 416L192 256 32 96 0 96 0 416l32 0zM320 256L480 416l32 0 0-320-32 0L320 256z" />
    </Icon>
);

export default ReflectHorizontal;
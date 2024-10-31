
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=sharp-duotone-solid reflect-vertical}
 * @preview ![reflect-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/reflect-vertical.svg)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 0l0 32L256 192 416 32l0-32L96 0zm0 480l0 32 320 0 0-32L256 320 96 480z" />
        <path d="M0 232l24 0 464 0 24 0 0 48-24 0L24 280 0 280l0-48z" />
    </Icon>
);

export default ReflectVertical;
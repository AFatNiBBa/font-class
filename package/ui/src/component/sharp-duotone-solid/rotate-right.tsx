
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-right?s=sharp-duotone-solid rotate-right}
 * @preview ![rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rotate-right.svg)
 */
const RotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256c0 57.3 21.9 114.7 65.6 158.4c87.5 87.5 229.3 87.5 316.8 0l-45.3-45.3c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0c15.1-15.1 30.2-30.2 45.3-45.3c-87.5-87.5-229.3-87.5-316.8 0C53.9 141.3 32 198.7 32 256z" />
        <path d="M336 224l-24-24L472 40l24 24 0 160H336z" />
    </Icon>
);

export default RotateRight;
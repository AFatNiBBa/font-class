
import { Icon, generic } from "../../index";

/**
 * A component that renders the `empty-set` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/empty-set?s=duotone empty-set}
 * @preview ![empty-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/empty-set.svg)
 */
const EmptySet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256c0 50.3 16.6 96.8 44.6 134.2l45.9-45.9C105.8 318.9 96 288.6 96 256c0-88.4 71.6-160 160-160c32.6 0 62.9 9.8 88.2 26.5c15.3-15.3 30.6-30.6 45.9-45.9C352.8 48.6 306.3 32 256 32C132.3 32 32 132.3 32 256zm89.9 179.4c37.4 28 83.8 44.6 134.1 44.6c123.7 0 224-100.3 224-224c0-50.3-16.6-96.8-44.6-134.1l-45.9 45.9C406.2 193.1 416 223.4 416 256c0 88.4-71.6 160-160 160c-32.6 0-62.9-9.8-88.2-26.5c-15.3 15.3-30.6 30.6-45.9 45.9z" />
        <path d="M502.6 9.4c12.5 12.5 12.5 32.8 0 45.3l-448 448c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l448-448c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default EmptySet;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=sharp-duotone-solid umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M117.1 433.7l14.3 28.6 2.3 4.7c13.8 27.6 42 45 72.8 45c45 0 81.4-36.5 81.4-81.4L288 288l-64 0 0 142.6c0 9.6-7.8 17.4-17.4 17.4c-6.6 0-12.6-3.7-15.6-9.6l-2.3-4.7-14.3-28.6-57.2 28.6z" />
        <path d="M288 32l0-32L224 0l0 32 0 2C97.7 49.7 0 157.5 0 288l512 0c0-130.5-97.7-238.3-224-254l0-2z" />
    </Icon>
);

export default UmbrellaSimple;
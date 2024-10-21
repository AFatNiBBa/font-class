
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=sharp-solid umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 32 0 2C414.3 49.7 512 157.5 512 288L0 288C0 157.5 97.7 49.7 224 34l0-2 0-32 64 0zm0 430.6c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7-14.3-28.6 57.2-28.6 14.3 28.6 2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4L224 320l64 0 0 110.6z" />
    </Icon>
);

export default UmbrellaSimple;
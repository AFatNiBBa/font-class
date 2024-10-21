
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=sharp-light umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0-16L240 0l0 16 0 16.5C116.7 40.1 17.1 134.9 2 256c-1.3 10.5-2 21.2-2 32l32 0 448 0 32 0c0-10.8-.7-21.5-2-32C494.9 134.9 395.3 40.1 272 32.5L272 16zm0 430.6L272 320l-32 0 0 126.6c0 18.5-15 33.4-33.4 33.4c-12.7 0-24.2-7.2-29.9-18.5l-2.3-4.7-7.2-14.3-28.6 14.3 7.2 14.3 2.3 4.7C159.1 498 181.8 512 206.6 512c36.1 0 65.4-29.3 65.4-65.4zM34.3 256C49.8 147.4 143.2 64 256 64s206.2 83.4 221.7 192L34.3 256z" />
    </Icon>
);

export default UmbrellaSimple;
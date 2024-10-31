
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=thin umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 24.1C121.1 36 17.4 132.3 2 256.1C-.2 273.6 14.3 288 32 288l448 0c17.7 0 32.2-14.4 30-31.9C494.6 132.3 391 36 264 32.1L264 8zm0 454.2L264 320l-16 0 0 142.2c0 18.7-15.2 33.8-33.8 33.8c-14.6 0-27.5-9.3-32.1-23.1l-6.5-19.4c-1.4-4.2-5.9-6.5-10.1-5.1s-6.5 5.9-5.1 10.1l6.5 19.4c6.8 20.4 25.8 34.1 47.3 34.1c27.5 0 49.8-22.3 49.8-49.8zM17.9 258C32.6 139.6 133.6 48 256 48s223.4 91.6 238.2 210c.8 6.7-4.7 14-14.2 14L32 272c-9.4 0-15-7.3-14.1-14z" />
    </Icon>
);

export default UmbrellaSimple;
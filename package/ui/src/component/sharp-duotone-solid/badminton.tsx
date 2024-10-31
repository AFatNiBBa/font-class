
import { Icon, generic } from "../../index";

/**
 * A component that renders the `badminton` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badminton?s=sharp-duotone-solid badminton}
 * @preview ![badminton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/badminton.svg)
 */
const Badminton: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448l63.7 64 95.6-96L95.6 352 0 448zm447.3 54.3l30.8 8.8 4.4-15.4 13.2-46 0 46.2 0 16 32 0 0-16 0-46.2 13.2 46 4.4 15.4 30.8-8.8L571.7 487l-11.2-39-97.6 0-11.2 39-4.4 15.4zM462 400l0 32 95.6 0 0-32c0-26.5-21.4-48-47.8-48s-47.8 21.5-47.8 48z" />
        <path d="M240.2 112.2C272.6 79.8 312.9 64 349 64c28.2 0 53.2 9.6 71.3 27.7S448 134.9 448 163c0 36-15.8 76.4-48.2 108.8c-59.4 59.4-139.7 60.9-180.1 20.5C201.6 274.1 192 249.1 192 221c0-36 15.8-76.4 48.2-108.8zM349 0c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 32.4 8.4 64.2 26.2 91.6l-48.8 48.8 45.3 45.3 48.8-48.8c73.3 48.1 177.5 27.4 245.7-40.8c43.6-43.6 67-99.8 66.9-154c0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0z" />
    </Icon>
);

export default Badminton;
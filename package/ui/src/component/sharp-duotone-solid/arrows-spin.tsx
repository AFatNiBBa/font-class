
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-spin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-spin?s=sharp-duotone-solid arrows-spin}
 * @preview ![arrows-spin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-spin.svg)
 */
const ArrowsSpin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256c0 10.9 .8 21.5 2.3 32l64.9 0c-2.1-10.3-3.2-21-3.2-32c0-40.1 14.8-76.8 39.1-104.9L176 192l16-16 0-128L64 48 48 64l41.8 41.8C53.9 145.5 32 198.2 32 256zm288 80l0 128 128 0 16-16-41.8-41.8C458.1 366.5 480 313.8 480 256c0-10.9-.8-21.5-2.3-32l-64.9 0c2.1 10.3 3.2 21 3.2 32c0 40.1-14.8 76.8-39.1 104.9L336 320l-16 16z" />
        <path d="M256 96c-11 0-21.7 1.1-32 3.2l0-64.9c10.5-1.5 21.1-2.3 32-2.3c57.8 0 110.5 21.9 150.2 57.8L448 48l16 16 0 128-128 0-16-16 40.9-40.9C332.8 110.8 296.1 96 256 96zM105.8 422.2L64 464 48 448l0-128 128 0 16 16-40.9 40.9C179.2 401.2 215.9 416 256 416c11 0 21.7-1.1 32-3.2l0 64.9c-10.5 1.5-21.1 2.3-32 2.3c-57.8 0-110.5-21.9-150.2-57.8z" />
    </Icon>
);

export default ArrowsSpin;
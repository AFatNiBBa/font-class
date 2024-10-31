
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-spin` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-spin?s=sharp-solid arrows-spin}
 * @preview ![arrows-spin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-spin.svg)
 */
const ArrowsSpin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96c-11 0-21.7 1.1-32 3.2l0-64.9c10.5-1.5 21.1-2.3 32-2.3c57.8 0 110.5 21.9 150.2 57.8L448 48l16 16 0 128-128 0-16-16 40.9-40.9C332.8 110.8 296.1 96 256 96zM135.1 151.1C110.8 179.2 96 215.9 96 256c0 11 1.1 21.7 3.2 32l-64.9 0c-1.5-10.5-2.3-21.1-2.3-32c0-57.8 21.9-110.5 57.8-150.2L48 64 64 48l128 0 0 128-16 16-40.9-40.9zM477.7 224c1.5 10.5 2.3 21.1 2.3 32c0 57.8-21.9 110.5-57.8 150.2L464 448l-16 16-128 0 0-128 16-16 40.9 40.9C401.2 332.8 416 296.1 416 256c0-11-1.1-21.7-3.2-32l64.9 0zM256 416c11 0 21.7-1.1 32-3.2l0 64.9c-10.5 1.5-21.1 2.3-32 2.3c-57.8 0-110.5-21.9-150.2-57.8L64 464 48 448l0-128 128 0 16 16-40.9 40.9C179.2 401.2 215.9 416 256 416z" />
    </Icon>
);

export default ArrowsSpin;
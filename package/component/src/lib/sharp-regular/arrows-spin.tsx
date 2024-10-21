
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-spin` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-spin?s=sharp-regular arrows-spin}
 * @preview ![arrows-spin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-spin.svg)
 */
const ArrowsSpin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M257.1 87.5c-11.3 0-22.4 1.1-33.1 3.3l0-48.7c10.8-1.7 21.9-2.5 33.1-2.5c55.4 0 105.9 20.9 144.2 55.2L448 48l16 16 0 128-128 0-16-16 47.3-47.3c-29.5-25.6-68-41.2-110.2-41.2zm-216 168c0-55.2 20.7-105.5 54.7-143.7L48 64 64 48l128 0 0 128-16 16-46.1-46.1c-25.4 29.4-40.7 67.8-40.7 109.7c0 11.1 1.1 22 3.1 32.5l-48.7 0c-1.6-10.6-2.4-21.4-2.4-32.5zm71.1 160.2L64 464 48 448l0-128 128 0 16 16-45.7 45.7c29.6 26 68.4 41.8 110.9 41.8c10.5 0 20.9-1 30.9-2.8l0 48.6c-10.1 1.4-20.4 2.2-30.9 2.2c-55.7 0-106.6-21.1-144.9-55.8zM336 320l46.9 46.9c26.3-29.6 42.2-68.7 42.2-111.4c0-10.8-1-21.3-3-31.5l48.7 0c1.5 10.3 2.3 20.8 2.3 31.5c0 56-21.3 107-56.2 145.4L464 448l-16 16-128 0 0-128 16-16z" />
    </Icon>
);

export default ArrowsSpin;
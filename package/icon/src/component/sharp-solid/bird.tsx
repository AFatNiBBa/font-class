
import { Icon } from "../../index";

/**
 * A component that renders the `bird` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=sharp-solid bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 160l0 32C0 294.3 68.5 380.5 162.1 407.4L217.6 512l54.3 0-.7-1.2L221 416c1 0 2 0 3 0c12.6 0 25-1 37.1-3.1L313.6 512l54.3 0-.7-1.2L308.3 399.6C390.3 366.3 448 285.9 448 192l0-21.3L512 128 447.4 84.9C441.9 37.1 401.3 0 352 0c-53 0-96 43-96 96l0 64L0 160zM352 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Bird;
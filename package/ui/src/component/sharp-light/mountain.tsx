
import { Icon } from "../../index";

/**
 * A component that renders the `mountain` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=sharp-light mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 448l448 0 0-30.1L369.8 256 264 256l-43.2 57.6-12.4 16.5L195.5 314l-50.1-62.7L32 417.9 32 448zM348 224L256 88.9 164.2 223.7l43.4 54.2 35.6-47.5L248 224l8 0 92 0zM0 448l0-40L236.6 60.4 256 32l19.4 28.4L512 408l0 40 0 32-32 0L32 480 0 480l0-32z" />
    </Icon>
);

export default Mountain;

import { Icon } from "../../index";

/**
 * A component that renders the `mountain` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=sharp-regular mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 432l0-9.2L154.5 266.3l34.5 44.4 19.3 24.8 18.9-25.1L268 256l82.4 0L464 422.8l0 9.2L48 432zM317.8 208L256 208l-12 0-7.2 9.6-29.1 38.9-24.7-31.8L256 117.3 317.8 208zM256 32L227 74.6 0 408l0 24 0 48 48 0 416 0 48 0 0-48 0-24L285 74.6 256 32z" />
    </Icon>
);

export default Mountain;
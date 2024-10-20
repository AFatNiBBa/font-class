
import { Icon } from "../../index";

/**
 * A component that renders the `h1` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=sharp-regular h1}
 * @preview ![h1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/h1.svg)
 */
const H1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 88l0-24L0 64 0 88 0 248 0 424l0 24 48 0 0-24 0-152 224 0 0 152 0 24 48 0 0-24 0-176 0-160 0-24-48 0 0 24 0 136L48 224 48 88zm336.4 83.1l20.4-12.7 51.3-32L456 400l-48 0-24 0 0 48 24 0 72 0 72 0 24 0 0-48-24 0-48 0 0-312 0-24-24 0-8 0-6.9 0-5.8 3.6-75.3 47 0 55.8 .4 .6z" />
    </Icon>
);

export default H1;
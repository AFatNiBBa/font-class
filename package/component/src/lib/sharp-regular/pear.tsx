
import { Icon } from "../../index";

/**
 * A component that renders the `pear` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=sharp-regular pear}
 * @preview ![pear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pear.svg)
 */
const Pear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M510.7 35.2l-17 17L457.9 88c33.9 49.8 28.8 118.3-15.4 162.5l-58.8 58.8c.2 3.5 .3 7.1 .3 10.7c0 106-86 192-192 192S0 426 0 320S86 128 192 128c3.6 0 7.2 .1 10.7 .3l58.8-58.8c44.2-44.2 112.6-49.3 162.5-15.4l35.9-35.9 17-17 33.9 33.9zM367 111l22-22c-30.2-15.7-68.2-10.9-93.6 14.4l-58.8 58.8-15.2 15.2-21.4-1.2c-2.7-.1-5.3-.2-8.1-.2c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144c0-2.7-.1-5.4-.2-8.1l-1.2-21.4 15.2-15.2 58.8-58.8c25.3-25.3 30.1-63.4 14.4-93.6l-22 22-17 17L350.1 128l17-17zM256 320l32 0c0 53-43 96-96 96l0-32c35.3 0 64-28.7 64-64z" />
    </Icon>
);

export default Pear;
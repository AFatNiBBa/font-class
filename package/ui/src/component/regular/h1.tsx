
import { Icon } from "../../index";

/**
 * A component that renders the `h1` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=regular h1}
 * @preview ![h1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/h1.svg)
 */
const H1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88L0 248 0 424c0 13.3 10.7 24 24 24s24-10.7 24-24l0-152 224 0 0 152c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 136L48 224 48 88zm456 0c0-8.5-4.5-16.4-11.8-20.7s-16.4-4.4-23.8-.3l-72 40c-11.6 6.4-15.8 21-9.3 32.6s21 15.8 32.6 9.3L456 128.8 456 400l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-312z" />
    </Icon>
);

export default H1;
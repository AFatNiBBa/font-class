
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=thin asterisk}
 * @preview ![asterisk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/asterisk.svg)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32c4.4 0 8 3.6 8 8l0 201.2L371.6 129.3c3.7-2.4 8.7-1.4 11.1 2.3s1.4 8.7-2.3 11.1L206.6 256 380.4 369.3c3.7 2.4 4.7 7.4 2.3 11.1s-7.4 4.7-11.1 2.3L200 270.8 200 472c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-201.2L12.4 382.7c-3.7 2.4-8.7 1.4-11.1-2.3s-1.4-8.7 2.3-11.1L177.4 256 3.6 142.7c-3.7-2.4-4.7-7.4-2.3-11.1s7.4-4.7 11.1-2.3L184 241.2 184 40c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default Asterisk;
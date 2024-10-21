
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=sharp-thin asterisk}
 * @preview ![asterisk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/asterisk.svg)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M200 32l0 8 0 201.2L371.6 129.3l8.7 13.4L206.6 256 380.4 369.3l-8.7 13.4L200 270.8 200 472l0 8-16 0 0-8 0-201.2L12.4 382.7 3.6 369.3 177.4 256 3.6 142.7l8.7-13.4L184 241.2 184 40l0-8 16 0z" />
    </Icon>
);

export default Asterisk;
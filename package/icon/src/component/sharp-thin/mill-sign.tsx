
import { Icon } from "../../index";

/**
 * A component that renders the `mill-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mill-sign?s=sharp-thin mill-sign}
 * @preview ![mill-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mill-sign.svg)
 */
const MillSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M184 254.6L96.5 501.3l15.1 5.4L184 302.5 184 440l0 8 16 0 0-8 0-182.6 41.9-118.1c12.4-7.2 26.8-11.3 42.1-11.3c46.4 0 84 37.6 84 84l0 228 0 8 16 0 0-8 0-228c0-55.2-44.8-100-100-100c-12.2 0-23.8 2.2-34.6 6.1L287.5 10.7 272.5 5.3 228.7 128.7c-16.1 10.7-29 26-36.7 44.1C176.7 137 141.3 112 100 112c-35.2 0-66.2 18.2-84 45.7L16 112 0 112 0 212l0 12L0 440l0 8 16 0 0-8 0-216 0-12c0-46.4 37.6-84 84-84s84 37.6 84 84l0 42.6zm16-45.2c.5-18.2 6.9-34.9 17.2-48.4L200 209.4z" />
    </Icon>
);

export default MillSign;
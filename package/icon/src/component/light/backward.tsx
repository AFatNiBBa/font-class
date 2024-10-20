
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=light backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M37.6 256L256 414.1l0-316.2L37.6 256zM258 64c16.6 0 30 13.5 30 30l0 103.4L464.3 69.7C469.5 66 475.6 64 482 64c16.6 0 30 13.5 30 30L512 418c0 16.6-13.4 30-30 30c-6.3 0-12.5-2-17.6-5.7L288 314.6 288 418c0 16.6-13.5 30-30 30c-6.3 0-12.5-2-17.6-5.7L9.9 275.4C3.7 270.9 0 263.7 0 256s3.7-14.9 9.9-19.4L240.3 69.7C245.5 66 251.6 64 258 64zm30 211.1l192 139 0-316.2-192 139 0 38.2z" />
    </Icon>
);

export default Backward;
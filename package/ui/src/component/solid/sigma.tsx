
import { Icon } from "../../index";

/**
 * A component that renders the `sigma` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=solid sigma}
 * @preview ![sigma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sigma.svg)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M2.4 51.8C7.4 39.8 19.1 32 32 32l288 0c35.3 0 64 28.7 64 64l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L109.3 96 246.6 233.4c12.5 12.5 12.5 32.8 0 45.3L109.3 416 320 416l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 35.3-28.7 64-64 64L32 480c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L178.7 256 9.4 86.6C.2 77.5-2.5 63.7 2.4 51.8z" />
    </Icon>
);

export default Sigma;
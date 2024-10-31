
import { Icon } from "../../index";

/**
 * A component that renders the `venus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/venus?s=thin venus}
 * @preview ![venus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/venus.svg)
 */
const Venus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 176a160 160 0 1 1 320 0A160 160 0 1 1 32 176zM200 351.8c93.5-4.2 168-81.3 168-175.8C368 78.8 289.2 0 192 0S16 78.8 16 176c0 94.5 74.5 171.6 168 175.8l0 64.2-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 72c0 4.4 3.6 8 8 8s8-3.6 8-8l0-72 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-64.2z" />
    </Icon>
);

export default Venus;

import { Icon } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=regular pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120l0 32L0 360l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 544 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 0-208 0-32c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8-272 0L48 128l0-8zm0 56l272 0 272 0 0 160L48 336l0-160z" />
    </Icon>
);

export default PipeSection;
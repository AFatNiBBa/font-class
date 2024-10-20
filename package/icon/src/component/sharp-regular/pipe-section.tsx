
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=sharp-regular pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 120l0-24L0 96l0 24 0 8 0 24 0 24L0 336l0 24 0 24 0 8 0 24 48 0 0-24 0-8 544 0 0 8 0 24 48 0 0-24 0-8 0-24 0-24 0-160 0-24 0-24 0-8 0-24-48 0 0 24 0 8-272 0L48 128l0-8zm0 56l272 0 272 0 0 160L48 336l0-160z" />
    </Icon>
);

export default PipeSection;
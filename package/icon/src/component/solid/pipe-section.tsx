
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=solid pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 96C14.3 96 0 110.3 0 128L0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zm576 0c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zm-64 32L96 128l0 256 448 0 0-256z" />
    </Icon>
);

export default PipeSection;
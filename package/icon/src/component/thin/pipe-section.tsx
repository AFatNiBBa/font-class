
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=thin pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 384c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16s16 7.2 16 16l0 256zM32 96C14.3 96 0 110.3 0 128L0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l512 0c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32s-32 14.3-32 32L64 128c0-17.7-14.3-32-32-32zm544 48l0 224L64 368l0-224 512 0zm48-16l0 256c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default PipeSection;
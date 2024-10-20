
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=light briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/briefcase-arrow-right.svg)
 */
const BriefcaseArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 32l160 0c8.8 0 16 7.2 16 16l0 48L160 96l0-48c0-8.8 7.2-16 16-16zM128 48l0 48L64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-64 0 0-48c0-26.5-21.5-48-48-48L176 0c-26.5 0-48 21.5-48 48zm16 80l224 0 80 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l80 0zm155.3 68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L329.4 272 144 272c-8.8 0-16 7.2-16 16s7.2 16 16 16l185.4 0-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80z" />
    </Icon>
);

export default BriefcaseArrowRight;
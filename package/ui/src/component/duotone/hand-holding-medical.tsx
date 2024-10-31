
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-medical?s=duotone hand-holding-medical}
 * @preview ![hand-holding-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-holding-medical.svg)
 */
const HandHoldingMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64c0 17.7 14.3 32 32 32l160 0 160.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c10.6-7.8 16.3-20 16.3-32.2c0-8.2-2.5-16.6-7.8-23.7c-13.1-17.8-38.1-21.6-55.9-8.5L392.6 416 272 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-16 0-78.3 0c-29.1 0-57.3 9.9-80 28L68.8 384 32 384c-17.7 0-32 14.3-32 32z" />
        <path d="M248 0c-13.3 0-24 10.7-24 24l0 56-56 0c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l56 0 0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56 56 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-56 0 0-56c0-13.3-10.7-24-24-24L248 0z" />
    </Icon>
);

export default HandHoldingMedical;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `ice-skate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-skate?s=duotone ice-skate}
 * @preview ![ice-skate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ice-skate.svg)
 */
const IceSkate: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l96 0 288 0 96 0c39.8 0 72-32.2 72-72l0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8c0 13.3-10.7 24-24 24l-72 0 0-80-48 0 0 80-240 0 0-80-48 0 0 80-72 0c-13.3 0-24 10.7-24 24z" />
        <path d="M32 336c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-21c0-44.1-30-82.4-72.7-93.1L320 192l-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-32-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32L66.8 86.1C46.2 91.9 32 110.8 32 132.2L32 336z" />
    </Icon>
);

export default IceSkate;
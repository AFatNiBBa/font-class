
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=duotone spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M2.5 211.7c-6.8 16.3 .9 35 17.2 41.8c4 1.7 8.2 2.5 12.3 2.5c12.5 0 24.4-7.4 29.6-19.7L66.7 224l90.7 0 5.1 12.3c5.1 12.3 17 19.7 29.6 19.7c4.1 0 8.3-.8 12.3-2.5c16.3-6.8 24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0S87.4 7.8 82.5 19.7l-66.7 160-13.3 32zM93.3 160L112 115.2 130.7 160l-37.3 0zM256 32l0 96 0 96c0 17.7 14.3 32 32 32l80 0c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80L288 0c-17.7 0-32 14.3-32 32zm64 32l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0-32zm0 96l32 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0-32z" />
        <path d="M566.6 265.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L352 434.7 521.4 265.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default SpellCheck;
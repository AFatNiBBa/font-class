
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-booth` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-booth?s=duotone person-booth}
 * @preview ![person-booth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-booth.svg)
 */
const PersonBooth: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 32l0 160 64 0 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 288l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160-64 0zM288.3 36.5l31.2 218.6L288.6 409.7c-3.5 17.3 7.8 34.2 25.1 37.7s34.2-7.8 37.7-25.1l.7-3.6c1.3 16.4 15.1 29.4 31.9 29.4c17.7 0 32-14.3 32-32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L320 0c-9.3 0-18.1 4-24.2 11s-8.8 16.3-7.5 25.5zM512 32l0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M64 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm48 237.3l0 72.1 38.4 51.2c6.2 8.3 9.6 18.4 9.6 28.8l0 58.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-53.3L64 384l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 278.3l0-.9 0-55.7c0-34 27.6-61.6 61.6-61.6c20.3 0 39.7 8.1 54 22.4L157.3 224l66.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-73.4 0c-12.7 0-24.9-5.1-33.9-14.1l-4.7-4.7z" />
    </Icon>
);

export default PersonBooth;
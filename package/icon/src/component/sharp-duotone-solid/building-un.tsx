
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-un` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-un?s=sharp-duotone-solid building-un}
 * @preview ![building-un](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-un.svg)
 */
const BuildingUn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l144 0 0-128 96 0 0 128 144 0L384 0 0 0zM64 224l64 0 0 64-64 0 0-64zM80 64l32 0 0 16 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 0-16 32 0 0 16 0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64 0-16zm80 160l64 0 0 64-64 0 0-64zM208 64l16 0 8 0 9.9 0 4.4 8.8L272 124.2 272 80l0-16 32 0 0 16 0 96 0 16-16 0-8 0-9.9 0-4.4-8.8L240 131.8l0 44.2 0 16-32 0 0-16 0-96 0-16zm48 160l64 0 0 64-64 0 0-64z" />
        <path d="M112 80l0-16L80 64l0 16 0 64c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64 0-16-32 0 0 16 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64zM224 64l-16 0 0 16 0 96 0 16 32 0 0-16 0-44.2 25.7 51.4 4.4 8.8 9.9 0 8 0 16 0 0-16 0-96 0-16-32 0 0 16 0 44.2L246.3 72.8 241.9 64 232 64l-8 0z" />
    </Icon>
);

export default BuildingUn;
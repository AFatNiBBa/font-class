
import { Icon, generic } from "../../index";

/**
 * A component that renders the `uniform-martial-arts` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/uniform-martial-arts?s=sharp-duotone-solid uniform-martial-arts}
 * @preview ![uniform-martial-arts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/uniform-martial-arts.svg)
 */
const UniformMartialArts: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 195.7L0 208 0 368l0 48 96 0 0-48 0-147.7 48-87.3L144 288l109 0 54.6-143.3L237.7 0 180 0 144 0l-8 0L107.6 0 93.9 24.9l-88 160L0 195.7zM144 384l0 128 352 0 0-128-86.3 0 9 13.5 26.6 39.9-79.9 53.3-26.6-39.9L320 422.5l-18.8 28.2-26.6 39.9-79.9-53.3 26.6-39.9 9-13.5L144 384zm143.2-96L496 288l0-154.9 48 87.3L544 368l0 48 96 0 0-48 0-160 0-12.3-5.9-10.8-88-160L532.4 0 504 0l-8 0L460 0 396.9 0l-57 149.7L287.2 288z" />
        <path d="M496 288l-352 0 0 64 146.1 0L248 415.2l-8.9 13.3 26.6 17.8 8.9-13.3L320 364.8 365.4 433l8.9 13.3 26.6-17.8L392 415.2 349.9 352 496 352l0-64z" />
    </Icon>
);

export default UniformMartialArts;
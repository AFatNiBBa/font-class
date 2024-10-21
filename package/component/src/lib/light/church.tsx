
import { Icon } from "../../index";

/**
 * A component that renders the `church` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=light church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l40 0 0 39.4-115.5 77c-17.8 11.9-28.5 31.9-28.5 53.3L160 480l-96 0c-17.7 0-32-14.3-32-32l0-69.9c0-10.9 5.5-21 14.6-26.9L128 298.6l0-38.1L29.2 324.4C11 336.2 0 356.4 0 378.1L0 448c0 35.3 28.7 64 64 64l120 0s0 0 0 0l72 0 32 0 64 0 32 0 72 0s0 0 0 0l120 0c35.3 0 64-28.7 64-64l0-69.9c0-21.7-11-41.9-29.2-53.7L512 260.5l0 38.1 81.4 52.7c9.1 5.9 14.6 16 14.6 26.9l0 69.9c0 17.7-14.3 32-32 32l-96 0 0-230.3c0-21.4-10.7-41.4-28.5-53.3L336 119.4 336 80l40 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-40 0 0-32zM448 480l-64 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-64 0 0-230.3c0-10.7 5.3-20.7 14.2-26.6L320 147.2l113.8 75.8C442.7 229 448 239 448 249.7L448 480zm-96-96l0 96-64 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default Church;
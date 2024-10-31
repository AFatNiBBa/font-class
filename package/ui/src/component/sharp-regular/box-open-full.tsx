
import { Icon } from "../../index";

/**
 * A component that renders the `box-open-full` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open-full?s=sharp-regular box-open-full}
 * @preview ![box-open-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/box-open-full.svg)
 */
const BoxOpenFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M312.8 157.6l7.2 .9 167.3-20.9 44.1-93L444.6 3.4 384 131.5c0-1.2 0-2.3 0-3.5C384 57.3 326.7 0 256 0S128 57.3 128 128c0 2.2 .1 4.3 .2 6.5l65.5 8.2c-1.1-4.7-1.7-9.6-1.7-14.7c0-35.3 28.7-64 64-64s64 28.7 64 64c0 10.7-2.6 20.7-7.2 29.6zM64 160L0 288l224 64 96-160L64 160zM576 339.6l-48 13.7 0 57.2-184 46L344 312l0-24-48 0 0 24 0 144.5-184-46 0-57.2L64 339.6 64 448l256 64 256-64 0-108.4zM640 288L576 160 320 192l96 160 224-64z" />
    </Icon>
);

export default BoxOpenFull;

import { Icon } from "../../index";

/**
 * A component that renders the `bell-plus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-plus?s=regular bell-plus}
 * @preview ![bell-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bell-plus.svg)
 */
const BellPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c-17.7 0-32 14.3-32 32l0 17.9C119.5 61.4 64 124.2 64 200l0 33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-33.4c0-75.8-55.5-138.6-128-150.1L256 32c0-17.7-14.3-32-32-32zm0 96l8 0c57.4 0 104 46.6 104 104l0 33.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-33.4c0-57.4 46.6-104 104-104l8 0zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3zM224 152c-13.3 0-24 10.7-24 24l0 40-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-40c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default BellPlus;

import { Icon } from "../../index";

/**
 * A component that renders the `tower-cell` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-cell?s=sharp-light tower-cell}
 * @preview ![tower-cell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tower-cell.svg)
 */
const TowerCell: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 128c0-41.2 9.7-80.1 27-114.5L32 0 17.4 29.2C6.1 60 0 93.3 0 128s6.1 68 17.4 98.8L32 256l27-13.5C41.7 208.1 32 169.2 32 128zm64 0c0 30.9 7.3 60 20.2 85.9l28.6-14.3C134.1 178 128 153.7 128 128s6.1-50 16.9-71.6L116.2 42.1C103.3 68 96 97.1 96 128zM459.8 42.1L431.1 56.4C441.9 78 448 102.3 448 128s-6.1 50-16.9 71.6l28.6 14.3C472.7 188 480 158.9 480 128s-7.3-60-20.2-85.9zM544 128c0 41.2-9.7 80.1-27 114.5L544 256l14.6-29.2C569.9 196 576 162.7 576 128s-6.1-68-17.4-98.8L544 0 517 13.5c17.3 34.5 27 73.3 27 114.5zM288 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm47.3 75.1C345.7 159.7 352 144.6 352 128c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 16.6 6.3 31.7 16.7 43.1L98 512l34.7 0 40.2-96 232.6 0 41.1 96 34.8 0-2.7-6.3L335.3 171.1zM391.7 384l-205.5 0 26.8-64 151.2 0 27.4 64zm-41.1-96l-124.1 0L268 188.8c6.3 2.1 13 3.2 20 3.2c7 0 13.8-1.1 20.1-3.2L350.6 288z" />
    </Icon>
);

export default TowerCell;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-flame-curved` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-flame-curved?s=sharp-duotone-solid fire-flame-curved}
 * @preview ![fire-flame-curved](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fire-flame-curved.svg)
 */
const FireFlameCurved: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 332.2C0 431.5 80.5 512 179.8 512l29.9 0C306 512 384 434 384 337.7c0-67.5-27.6-132-76.4-178.6L222.9 78.2C213.4 69.1 208 56.6 208 43.5L208 0 168.3 31.8C142.8 52.1 128 83 128 115.6c0 28.5 11.3 55.7 31.4 75.9l44.7 44.7c12.7 12.7 19.9 30 19.9 48l0 3.9c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-112L76.7 188.9C28.8 220.8 0 274.6 0 332.2zm76.9 53.1C99.2 404.5 128.3 416 160 416c70.7 0 128-57.3 128-128l0-3.9c0-31-10.9-60.9-30.7-84.6l6 5.8c36.2 34.5 56.6 82.3 56.6 132.3C320 398.6 270.6 448 209.7 448l-29.9 0c-44.8 0-83.6-25.4-102.9-62.7z" />
        <path d="M76.9 385.3C96.1 422.6 135 448 179.8 448l29.9 0C270.6 448 320 398.6 320 337.7c0-50-20.5-97.8-56.6-132.3l-6-5.8c19.7 23.6 30.7 53.5 30.7 84.6l0 3.9c0 70.7-57.3 128-128 128c-31.7 0-60.8-11.5-83.1-30.7z" />
    </Icon>
);

export default FireFlameCurved;
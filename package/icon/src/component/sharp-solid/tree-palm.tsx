
import { Icon } from "../../index";

/**
 * A component that renders the `tree-palm` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-palm?s=sharp-solid tree-palm}
 * @preview ![tree-palm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tree-palm.svg)
 */
const TreePalm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 80l37.2 61.9c-4 3.5-8 7.2-12 11.2C41.9 232.3 64.6 322.8 98.5 356.8L248.4 206.9c4 10.8 7.8 26.2 9.7 47.2c4.2 46.5-1.6 116.8-32.7 216.4l-13 41.5 43.5 0 64 0 28.2 0 3.5-28c12.4-99-2.3-207.2-31.7-292l131.2 0L480 144l28.8 48 67.2 0c0-48-48-128-160-128c-43.7 0-77.6 12.2-102.8 29.8C296.5 49.4 248 0 160 0C48 0 0 80 0 128l67.2 0L96 80z" />
    </Icon>
);

export default TreePalm;
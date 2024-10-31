
import { Icon, generic } from "../../index";

/**
 * A component that renders the `racquet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/racquet?s=sharp-duotone-solid racquet}
 * @preview ![racquet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/racquet.svg)
 */
const Racquet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l96-96c3.1 3.1 6.3 6.3 9.4 9.4c15.1 15.1 30.2 30.2 45.3 45.3c3.1 3.1 6.2 6.2 9.4 9.4L64 512 0 448z" />
        <path d="M240.2 112.2C272.6 79.8 312.9 64 349 64c28.2 0 53.2 9.6 71.3 27.7S448 134.9 448 163c0 36-15.8 76.4-48.2 108.8c-59.4 59.4-139.7 60.9-180.1 20.5C201.6 274.1 192 249.1 192 221c0-36 15.8-76.4 48.2-108.8zM349 0c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 32.4 8.4 64.2 26.2 91.6l-48.8 48.8 45.3 45.3 48.8-48.8c73.3 48.1 177.5 27.4 245.7-40.8c43.6-43.6 67-99.8 66.9-154c0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0z" />
    </Icon>
);

export default Racquet;
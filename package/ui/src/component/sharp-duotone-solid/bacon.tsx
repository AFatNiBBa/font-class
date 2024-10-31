
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bacon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bacon?s=sharp-duotone-solid bacon}
 * @preview ![bacon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bacon.svg)
 */
const Bacon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352c157.8-71 183.3-114.8 210.8-162C239.1 141.4 269.6 89.2 448 0c14.9 18.7 29.9 37.4 44.8 56.1c-72.8 38.4-120.4 72.2-154.2 103.4c-38.1 35.3-58.1 66.8-76.2 96.1c-.4 .6-.8 1.3-1.2 1.9c-17.5 28.3-33.5 54-63.5 81.5c-28.5 26.1-70.3 54.3-138.9 86.5C39.2 401 19.6 376.5 0 352zm79.3 99.1c66.6-31.8 109.5-60.6 140-88.6c33.3-30.5 51.3-59.4 68.7-87.6c.5-.8 1-1.7 1.6-2.5c17.8-28.7 35.9-57.2 70.8-89.4c32-29.6 78.6-62.8 152.9-101.5c20.9 26.2 41.9 52.3 62.8 78.5C397.6 249.2 367.1 301.4 338.8 350c-27.5 47.2-53 91-210.8 162L79.3 451.1z" />
        <path d="M492.8 56.1c-72.8 38.4-120.4 72.2-154.2 103.4c-38.1 35.3-58.1 66.8-76.2 96.1l-1.2 1.9s0 0 0 0c-17.5 28.3-33.5 54-63.5 81.5c-28.5 26.1-70.3 54.3-138.9 86.5l20.5 25.7c66.6-31.8 109.5-60.6 140-88.6c33.3-30.5 51.3-59.4 68.7-87.6l1.6-2.5c17.8-28.7 35.9-57.2 70.8-89.4c32-29.6 78.6-62.8 152.9-101.5L492.8 56.1z" />
    </Icon>
);

export default Bacon;
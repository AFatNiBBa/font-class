
import { Icon } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=sharp-thin pen-fancy}
 * @preview ![pen-fancy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen-fancy.svg)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 240L64 280 0 480l10.3 10.3 11.3 11.3L32 512l200-64 40-128L500.1 114.7 512 104 500.7 92.7 419.3 11.3 408 0 397.3 11.9 192 240zM105.9 417.4c6.3 4.2 13.9 6.6 22.1 6.6c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 8.2 2.4 15.7 6.6 22.1l-73 73-3.4-3.4L76.7 292.8l119.4-37.3 60.4 60.4L219.2 435.3 36.4 493.8 33 490.3l73-73zm102.7-172L408.6 23.2l80.2 80.2L266.6 303.3l-57.9-57.9zM104 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default PenFancy;
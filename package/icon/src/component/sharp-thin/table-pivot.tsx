
import { Icon } from "../../index";

/**
 * A component that renders the `table-pivot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-pivot?s=sharp-thin table-pivot}
 * @preview ![table-pivot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table-pivot.svg)
 */
const TablePivot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 112 112 0 0-112L16 48zm0 128l0 288 112 0 0-288L16 176zm128 0l0 288 352 0 0-288-352 0zm352-16l0-112L144 48l0 112 352 0zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM440 291.3l-5.7-5.7L408 259.3 408 368l0 8-8 0-108.7 0 26.3 26.3 5.7 5.7L312 419.3l-5.7-5.7-40-40-5.7-5.7 5.7-5.7 40-40c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L291.3 360 392 360l0-100.7-26.3 26.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l40-40 5.7-5.7 5.7 5.7 40 40 5.7 5.7L440 291.3z" />
    </Icon>
);

export default TablePivot;
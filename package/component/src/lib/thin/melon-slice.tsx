
import { Icon } from "../../index";

/**
 * A component that renders the `melon-slice` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon-slice?s=thin melon-slice}
 * @preview ![melon-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/melon-slice.svg)
 */
const MelonSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M427 2.3c-3.1-3.1-8.2-3.1-11.3 0L330.8 87.2c-1.8 1.8-2.6 4.3-2.3 6.8c1.4 9.7 2.1 19.6 2.1 29.7c0 114.3-92.6 206.9-206.9 206.9c-10.1 0-20-.7-29.7-2.1c-2.5-.4-5 .5-6.8 2.3L2.3 415.7c-3.1 3.1-3.1 8.2 0 11.3c54.4 54.4 128.3 85 205.2 85l4.2 0C377.6 512 512 377.6 512 211.7l0-4.2c0-77-30.6-150.8-85-205.2zm-42.7 54l36.9-36.9C469.2 70.2 496 137.5 496 207.6l0 4.2C496 368.7 368.7 496 211.7 496l-4.2 0c-70.1 0-137.4-26.8-188.2-74.7l36.9-36.9C97.9 423.8 154.1 448 216 448c128.1 0 232-103.9 232-232c0-61.9-24.2-118.1-63.7-159.7zM373 67.6c36.6 38.7 59 90.9 59 148.4c0 119.3-96.7 216-216 216c-57.4 0-109.7-22.4-148.4-59l28.1-28.1c9.2 1.1 18.5 1.7 28 1.7c123.1 0 222.9-99.8 222.9-222.9c0-9.5-.6-18.8-1.7-28L373 67.6z" />
    </Icon>
);

export default MelonSlice;
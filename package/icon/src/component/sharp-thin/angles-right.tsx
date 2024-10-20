
import { Icon } from "../../index";

/**
 * A component that renders the `angles-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-right?s=sharp-thin angles-right}
 * @preview ![angles-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angles-right.svg)
 */
const AnglesRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M269.7 261.7l5.7-5.7-5.7-5.7-176-176L88 68.7 76.7 80l5.7 5.7L252.7 256 82.3 426.3 76.7 432 88 443.3l5.7-5.7 176-176zm192 0l5.7-5.7-5.7-5.7-176-176L280 68.7 268.7 80l5.7 5.7L444.7 256 274.3 426.3l-5.7 5.7L280 443.3l5.7-5.7 176-176z" />
    </Icon>
);

export default AnglesRight;
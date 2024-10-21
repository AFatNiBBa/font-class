
import { Icon } from "../../index";

/**
 * A component that renders the `kaggle` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kaggle?s=brands kaggle}
 * @preview ![kaggle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/kaggle.svg)
 */
const Kaggle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z" />
    </Icon>
);

export default Kaggle;
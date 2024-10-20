
import { Icon } from "../../index";

/**
 * A component that renders the `lambda` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=sharp-regular lambda}
 * @preview ![lambda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lambda.svg)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32L0 32 0 80l24 0 113.4 0 12.7 24.3L3.1 480l51.5 0L179.5 160.9 338.7 467.1l6.7 12.9 14.6 0 64 0 24 0 0-48-24 0-49.4 0L173.3 44.9 166.6 32 152 32 24 32z" />
    </Icon>
);

export default Lambda;
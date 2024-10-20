
import { Icon } from "../../index";

/**
 * A component that renders the `lambda` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=sharp-thin lambda}
 * @preview ![lambda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lambda.svg)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 32L0 32 0 48l8 0 139 0 27.7 57.5L11.8 480l17.4 0L183.8 124.5l169 351L355 480l5 0 80 0 8 0 0-16-8 0-75 0L159.2 36.5 157 32l-5 0L8 32z" />
    </Icon>
);

export default Lambda;
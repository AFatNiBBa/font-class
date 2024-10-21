
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=thin plus-large}
 * @preview ![plus-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/plus-large.svg)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 240L8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l240 0 0 240c0 4.4 3.6 8 8 8s8-3.6 8-8l0-240 240 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-240 0L264 8z" />
    </Icon>
);

export default PlusLarge;
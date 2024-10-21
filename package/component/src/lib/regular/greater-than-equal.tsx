
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=regular greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M47 78.2c-12.3-5-18.2-19-13.2-31.3s19-18.2 31.3-13.2l336 136c9.1 3.7 15 12.5 15 22.2s-5.9 18.6-15 22.2L65 350.2c-12.3 5-26.3-1-31.3-13.2s1-26.3 13.2-31.3L328 192 47 78.2zM424 432c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 480c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0z" />
    </Icon>
);

export default GreaterThanEqual;
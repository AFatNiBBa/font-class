
import { Icon } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=regular less-than-equal}
 * @preview ![less-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/less-than-equal.svg)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M401 78.2c12.3-5 18.2-19 13.2-31.3s-19-18.2-31.3-13.2L47 169.8c-9.1 3.7-15 12.5-15 22.2s5.9 18.6 15 22.2l336 136c12.3 5 26.3-1 31.3-13.2s-1-26.3-13.2-31.3L120 192 401 78.2zM24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432z" />
    </Icon>
);

export default LessThanEqual;
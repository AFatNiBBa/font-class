
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=thin greater-than}
 * @preview ![greater-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/greater-than.svg)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8.8 76.4c-2 4-.4 8.8 3.6 10.7L350.1 256 12.4 424.8c-4 2-5.6 6.8-3.6 10.7s6.8 5.6 10.7 3.6l352-176c2.7-1.4 4.4-4.1 4.4-7.2s-1.7-5.8-4.4-7.2l-352-176c-4-2-8.8-.4-10.7 3.6z" />
    </Icon>
);

export default GreaterThan;
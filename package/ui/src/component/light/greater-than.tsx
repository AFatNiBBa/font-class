
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=light greater-than}
 * @preview ![greater-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/greater-than.svg)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M1.7 72.8c-4 7.9-.7 17.5 7.2 21.5L332.2 256 8.8 417.7c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l352-176c5.4-2.7 8.8-8.3 8.8-14.3s-3.4-11.6-8.8-14.3l-352-176c-7.9-4-17.5-.7-21.5 7.2z" />
    </Icon>
);

export default GreaterThan;
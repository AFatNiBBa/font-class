
import { Icon } from "../../index";

/**
 * A component that renders the `less-than` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=light less-than}
 * @preview ![less-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/less-than.svg)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M382.3 72.8c4 7.9 .7 17.5-7.2 21.5L51.8 256 375.2 417.7c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2l-352-176C3.4 267.6 0 262.1 0 256s3.4-11.6 8.8-14.3l352-176c7.9-4 17.5-.7 21.5 7.2z" />
    </Icon>
);

export default LessThan;
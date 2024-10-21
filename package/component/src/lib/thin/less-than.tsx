
import { Icon } from "../../index";

/**
 * A component that renders the `less-than` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=thin less-than}
 * @preview ![less-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/less-than.svg)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M375.2 76.4c2 4 .4 8.8-3.6 10.7L33.9 256 371.6 424.8c4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6l-352-176C9.7 261.8 8 259 8 256s1.7-5.8 4.4-7.2l352-176c4-2 8.8-.4 10.7 3.6z" />
    </Icon>
);

export default LessThan;
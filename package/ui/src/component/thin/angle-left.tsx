
import { Icon } from "../../index";

/**
 * A component that renders the `angle-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=thin angle-left}
 * @preview ![angle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/angle-left.svg)
 */
const AngleLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M50.3 261.7c-3.1-3.1-3.1-8.2 0-11.3l176-176c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L67.3 256 237.7 426.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-176-176z" />
    </Icon>
);

export default AngleLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `angle-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=thin angle-up}
 * @preview ![angle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/angle-up.svg)
 */
const AngleUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M218.3 146.3c3.1-3.1 8.2-3.1 11.3 0l176 176c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L224 163.3 53.7 333.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l176-176z" />
    </Icon>
);

export default AngleUp;

import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=thin angle-down}
 * @preview ![angle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/angle-down.svg)
 */
const AngleDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M218.3 365.7c3.1 3.1 8.2 3.1 11.3 0l176-176c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 348.7 53.7 178.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l176 176z" />
    </Icon>
);

export default AngleDown;
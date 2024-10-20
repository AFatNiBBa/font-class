
import { Icon } from "../../index";

/**
 * A component that renders the `angle-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=regular angle-up}
 * @preview ![angle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/angle-up.svg)
 */
const AngleUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M207 143c9.4-9.4 24.6-9.4 33.9 0L401 303c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-143-143L81 337c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L207 143z" />
    </Icon>
);

export default AngleUp;
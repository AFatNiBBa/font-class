
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=regular chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M273 47c-9.4-9.4-24.6-9.4-33.9 0L47 239c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l175-175L431 273c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L273 47zM465 431L273 239c-9.4-9.4-24.6-9.4-33.9 0L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l175-175L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z" />
    </Icon>
);

export default ChevronsUp;
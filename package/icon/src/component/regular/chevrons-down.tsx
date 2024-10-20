
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=regular chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M239 465c9.4 9.4 24.6 9.4 33.9 0L465 273c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 239c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 465zM47 81L239 273c9.4 9.4 24.6 9.4 33.9 0L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
    </Icon>
);

export default ChevronsDown;
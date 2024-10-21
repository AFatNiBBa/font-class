
import { Icon } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=solid wand-magic}
 * @preview ![wand-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/wand-magic.svg)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" />
    </Icon>
);

export default WandMagic;
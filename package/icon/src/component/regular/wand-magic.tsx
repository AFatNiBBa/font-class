
import { Icon } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=regular wand-magic}
 * @preview ![wand-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wand-magic.svg)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M319.7 157.7l34.6 34.6L464 82.6 429.4 48 319.7 157.7zm-33.9 33.9L48 429.4 82.6 464 320.3 226.2l-34.6-34.6zM14.1 395.4L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9z" />
    </Icon>
);

export default WandMagic;
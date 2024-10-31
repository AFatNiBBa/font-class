
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=regular print}
 * @preview ![print](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/print.svg)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 160l0-96c0-8.8 7.2-16 16-16l229.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c3 3 4.7 7.1 4.7 11.3l0 69.5 48 0 0-69.5c0-17-6.7-33.3-18.7-45.3L402.7 18.7C390.7 6.7 374.5 0 357.5 0L128 0C92.7 0 64 28.7 64 64l0 96 48 0zm16 208l256 0 0 96-256 0 0-96zm-16-48c-17.7 0-32 14.3-32 32l-32 0 0-96c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 96-32 0c0-17.7-14.3-32-32-32l-288 0zm320 80l48 0c17.7 0 32-14.3 32-32l0-112c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64L0 368c0 17.7 14.3 32 32 32l48 0 0 80c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-80z" />
    </Icon>
);

export default Print;
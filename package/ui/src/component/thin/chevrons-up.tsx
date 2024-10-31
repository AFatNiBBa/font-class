
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=thin chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M261.7 50.3c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 67.3 466.3 277.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-216-216zm216 408l-216-216c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 259.3 466.3 469.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z" />
    </Icon>
);

export default ChevronsUp;
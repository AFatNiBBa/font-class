
import { Icon } from "../../index";

/**
 * A component that renders the `medal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=sharp-solid medal}
 * @preview ![medal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/medal.svg)
 */
const Medal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L144 0l86.4 129.6c-42.2 5.2-80.5 23-111 49.6L0 0zM512 0L392.6 179.1c-30.5-26.6-68.8-44.4-111-49.6L368 0 512 0zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm176-96l-29.7 57.2L160 306.3l48 44.5-11.3 62.8L256 384l59.3 29.7L304 350.8l48-44.5-66.3-9.2L256 240z" />
    </Icon>
);

export default Medal;
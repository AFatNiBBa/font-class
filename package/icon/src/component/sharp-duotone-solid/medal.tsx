
import { Icon, generic } from "../../index";

/**
 * A component that renders the `medal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=sharp-duotone-solid medal}
 * @preview ![medal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/medal.svg)
 */
const Medal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L144 0 250.7 160.1c-43.6 1.3-83.3 18.5-113.4 45.9L0 0zM261.3 160.1L368 0 512 0 374.7 206c-30.1-27.5-69.7-44.6-113.4-45.9z" />
        <path d="M256 512a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm29.7-214.8l66.3 9.2-48 44.5 11.3 62.8L256 384l-59.3 29.7L208 350.8l-48-44.5 66.3-9.2L256 240l29.7 57.2z" />
    </Icon>
);

export default Medal;
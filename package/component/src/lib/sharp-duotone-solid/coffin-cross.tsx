
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coffin-cross` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin-cross?s=sharp-duotone-solid coffin-cross}
 * @preview ![coffin-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/coffin-cross.svg)
 */
const CoffinCross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144L104 512l176 0L384 144 272 0 112 0 0 144zm96 16l24 0 48 0 0-40 0-24 48 0 0 24 0 40 48 0 24 0 0 48-24 0-48 0 0 120 0 24-48 0 0-24 0-120-48 0-24 0 0-48z" />
        <path d="M216 120l0-24-48 0 0 24 0 40-48 0-24 0 0 48 24 0 48 0 0 120 0 24 48 0 0-24 0-120 48 0 24 0 0-48-24 0-48 0 0-40z" />
    </Icon>
);

export default CoffinCross;
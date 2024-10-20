
import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=sharp-thin angle-down}
 * @preview ![angle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angle-down.svg)
 */
const AngleDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 371.3l5.7-5.7 176-176 5.7-5.7L400 172.7l-5.7 5.7L224 348.7 53.7 178.3 48 172.7 36.7 184l5.7 5.7 176 176 5.7 5.7z" />
    </Icon>
);

export default AngleDown;

import { Icon } from "../../index";

/**
 * A component that renders the `h4` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=sharp-regular h4}
 * @preview ![h4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/h4.svg)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 64l0 24 0 136 224 0 0-136 0-24 48 0 0 24 0 160 0 176 0 24-48 0 0-24 0-152L48 272l0 152 0 24L0 448l0-24L0 248 0 88 0 64l48 0zm592 0l0 24 0 336 0 24-48 0 0-24 0-120-200 0-29.5 0 6-28.9L412.5 64l49 0-40 192L592 256l0-168 0-24 48 0z" />
    </Icon>
);

export default H4;
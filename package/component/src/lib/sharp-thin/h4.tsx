
import { Icon } from "../../index";

/**
 * A component that renders the `h4` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=sharp-thin h4}
 * @preview ![h4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/h4.svg)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 64l0 8 0 168 288 0 0-168 0-8 16 0 0 8 0 176 0 192 0 8-16 0 0-8 0-184L16 256l0 184 0 8L0 448l0-8L0 248 0 72l0-8 16 0zm624 0l0 8 0 368 0 8-16 0 0-8 0-152s0 0 0 0l-232 0-9.7 0 1.8-9.5L425.4 64l16.3 0-40 208L624 272s0 0 0 0l0-200 0-8 16 0z" />
    </Icon>
);

export default H4;
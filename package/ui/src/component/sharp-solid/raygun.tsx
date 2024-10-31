
import { Icon } from "../../index";

/**
 * A component that renders the `raygun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=sharp-solid raygun}
 * @preview ![raygun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/raygun.svg)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 64l96 0 0-8 0-24 48 0 0 24 0 240 0 24-48 0 0-24 0-8L176 512 48 448l80-160-16 0C50.1 288 0 237.9 0 176C0 131.3 26.2 92.8 64 74.8L64 0 192 64zm224 0l0 24 0 56 64 0 96-48 0 160-96-48-64 0 0 56 0 24-48 0 0-24 0-176 0-24 48 0zM136 176a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Raygun;

import { Icon } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=regular apostrophe}
 * @preview ![apostrophe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/apostrophe.svg)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 176c8.8 0 16-7.2 16-16l0-32 0-32c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l64 0zm16 46c-5.1 1.3-10.5 2-16 2l-64 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72c0 66.3-53.7 120-120 120l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0c39.8 0 72-32.2 72-72l0-10z" />
    </Icon>
);

export default Apostrophe;
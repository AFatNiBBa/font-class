
import { Icon } from "../../index";

/**
 * A component that renders the `code` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code?s=thin code}
 * @preview ![code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code.svg)
 */
const Code: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M410.7 .5c-4.2-1.5-8.7 .7-10.2 4.9l-176 496c-1.5 4.2 .7 8.7 4.9 10.2s8.7-.7 10.2-4.9l176-496c1.5-4.2-.7-8.7-4.9-10.2zm71.5 122.1c-3 3.2-2.9 8.3 .3 11.3L612.3 256 482.5 378.2c-3.2 3-3.4 8.1-.3 11.3s8.1 3.4 11.3 .3l136-128c1.6-1.5 2.5-3.6 2.5-5.8s-.9-4.3-2.5-5.8l-136-128c-3.2-3-8.3-2.9-11.3 .3zm-324.3 0c-3-3.2-8.1-3.4-11.3-.3l-136 128C8.9 251.7 8 253.8 8 256s.9 4.3 2.5 5.8l136 128c3.2 3 8.3 2.9 11.3-.3s2.9-8.3-.3-11.3L27.7 256 157.5 133.8c3.2-3 3.4-8.1 .3-11.3z" />
    </Icon>
);

export default Code;

import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=regular jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 24c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 0C42.7 0 32 10.7 32 24zM256 128c8.8 0 16 7.2 16 16l0 80L48 224l0-80c0-8.8 7.2-16 16-16l192 0zm16 240l0 80c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-80 224 0zM64 80C28.7 80 0 108.7 0 144L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-304c0-35.3-28.7-64-64-64L64 80z" />
    </Icon>
);

export default Jar;
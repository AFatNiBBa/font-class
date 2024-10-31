
import { Icon } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=regular code-simple}
 * @preview ![code-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/code-simple.svg)
 */
const CodeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M216.6 105.4c9.6-9.2 9.9-24.3 .8-33.9s-24.3-9.9-33.9-.8l-176 168C2.7 243.2 0 249.4 0 256s2.7 12.8 7.4 17.4l176 168c9.6 9.2 24.8 8.8 33.9-.8s8.8-24.8-.8-33.9L58.8 256 216.6 105.4zm142.9 0L517.2 256 359.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9z" />
    </Icon>
);

export default CodeSimple;
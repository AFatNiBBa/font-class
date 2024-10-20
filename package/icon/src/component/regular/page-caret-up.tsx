
import { Icon } from "../../index";

/**
 * A component that renders the `page-caret-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-up?s=regular page-caret-up}
 * @preview ![page-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/page-caret-up.svg)
 */
const PageCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 448c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-309.5c0-4.2-1.7-8.3-4.7-11.3L256.8 52.7c-3-3-7.1-4.7-11.3-4.7L64 48c-8.8 0-16 7.2-16 16l0 384zm272 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64zM192 192c4.5 0 8.8 1.9 11.8 5.2l75.7 82.6c14.1 15.4 3.2 40.2-17.7 40.2l-139.6 0c-20.9 0-31.8-24.8-17.7-40.2l75.7-82.6c3-3.3 7.3-5.2 11.8-5.2z" />
    </Icon>
);

export default PageCaretUp;
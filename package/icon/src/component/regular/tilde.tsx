
import { Icon } from "../../index";

/**
 * A component that renders the `tilde` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=regular tilde}
 * @preview ![tilde](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tilde.svg)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M100.5 176c-29 0-52.5 23.5-52.5 52.5L48 320c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-91.5C0 173 45 128 100.5 128c29.6 0 57.6 13 76.7 35.6L307.4 317.4c10 11.8 24.6 18.6 40.1 18.6c29 0 52.5-23.5 52.5-52.5l0-91.5c0-13.3 10.7-24 24-24s24 10.7 24 24l0 91.5C448 339 403 384 347.5 384c-29.6 0-57.6-13-76.7-35.6L140.6 194.6c-10-11.8-24.6-18.6-40.1-18.6z" />
    </Icon>
);

export default Tilde;
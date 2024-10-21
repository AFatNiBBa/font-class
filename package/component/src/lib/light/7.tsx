
import { Icon } from "../../index";

/**
 * A component that renders the `7` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/7?s=light 7}
 * @preview ![7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/7.svg)
 */
const $7: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16l288 0c5.8 0 11.1 3.1 14 8.2s2.7 11.3-.3 16.2l-256 416c-4.6 7.5-14.5 9.9-22 5.2s-9.9-14.5-5.2-22L275.4 64 16 64C7.2 64 0 56.8 0 48z" />
    </Icon>
);

export default $7;
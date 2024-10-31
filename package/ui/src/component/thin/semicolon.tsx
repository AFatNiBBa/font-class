
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=thin semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 128a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 32 128a64 64 0 1 0 128 0zM144 350.4c0 8.5-2.4 16.9-6.8 24.2L69 486.2c-3.7 6.1-10.3 9.8-17.5 9.8c-12.7 0-22.4-11.5-20.1-24.1L54.8 341.1C58.6 319.6 77.3 304 99 304c24.8 0 45 20.1 45 45l0 1.5zm16 0l0-1.5c0-33.7-27.3-61-61-61c-29.5 0-54.8 21.2-60 50.2L15.7 469.1c-4 22.3 13.2 42.9 35.9 42.9c12.7 0 24.5-6.6 31.1-17.4L150.8 383c6-9.8 9.2-21.1 9.2-32.6z" />
    </Icon>
);

export default Semicolon;
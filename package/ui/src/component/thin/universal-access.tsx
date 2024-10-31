
import { Icon } from "../../index";

/**
 * A component that renders the `universal-access` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/universal-access?s=thin universal-access}
 * @preview ![universal-access](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/universal-access.svg)
 */
const UniversalAccess: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM128.7 188.8c-1.8 4 0 8.8 4.1 10.6l28.1 12.5c15.2 6.7 31 11.8 47.1 15.2l0 99.8-23.7 78.9c-1.3 4.2 1.1 8.7 5.4 10s8.7-1.1 10-5.4L222 336l68.1 0 22.3 74.3c1.3 4.2 5.7 6.6 10 5.4s6.6-5.7 5.4-10L304 326.8l0-99.8c16.2-3.4 31.9-8.5 47.1-15.2l28.1-12.5c4-1.8 5.9-6.5 4.1-10.6s-6.5-5.9-10.6-4.1l-28.1 12.5C316.7 209.6 286.5 216 256 216s-60.7-6.4-88.6-18.8l-28.1-12.5c-4-1.8-8.8 0-10.6 4.1zM224 229.8c10.6 1.5 21.3 2.2 32 2.2s21.4-.7 32-2.2l0 90.2-64 0 0-90.2z" />
    </Icon>
);

export default UniversalAccess;
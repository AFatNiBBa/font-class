
import { Icon } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=sharp-solid text-slash}
 * @preview ![text-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/text-slash.svg)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L355.7 253.4 400.2 96 503 96 497 120.2 487 160l66 0 6.1-24.2 16-64L585 32l-41 0L192 32l-25 0L161 56.2l-9.6 38.5L48.4 14.8zM206.6 137.6l.5-1.9L217 96l116.7 0L301.2 211.1l-94.6-73.4zM327.3 353.9L272.9 311 243.3 416 192 416l-32 0 0 64 32 0 160 0 32 0 0-64-32 0-42.2 0 17.6-62.1z" />
    </Icon>
);

export default TextSlash;

import { Icon } from "../../index";

/**
 * A component that renders the `comma` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comma?s=regular comma}
 * @preview ![comma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/comma.svg)
 */
const Comma: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M120 353.4c0-9.6-7.8-17.4-17.4-17.4c-8.4 0-15.6 6-17.1 14.3L66.7 453.6l50.4-85.7c1.9-3.3 2.9-7 2.9-10.7l0-3.8zm48 0l0 3.8c0 12.3-3.3 24.4-9.5 35.1l-57.2 97.2C93.1 503.4 78 512 61.8 512L60 512c-24.3 0-44-19.7-44-44c0-2.6 .2-5.3 .7-7.9L38.2 341.7C43.9 310.6 71 288 102.6 288c36.1 0 65.4 29.3 65.4 65.4z" />
    </Icon>
);

export default Comma;
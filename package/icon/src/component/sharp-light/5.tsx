
import { Icon } from "../../index";

/**
 * A component that renders the `5` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/5?s=sharp-light 5}
 * @preview ![5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/5.svg)
 */
const $5: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M51.2 32L64 32l208 0 16 0 0 32-16 0L76.8 64l-36 160L192 224c70.7 0 128 57.3 128 128s-57.3 128-128 128L87.5 480c-35.2 0-67-21-80.9-53.3L1.3 414.3l29.4-12.6L36 414.1C44.8 434.6 65.1 448 87.5 448L192 448c53 0 96-43 96-96s-43-96-96-96L20.8 256l-20 0 4.4-19.5 43.2-192L51.2 32z" />
    </Icon>
);

export default $5;
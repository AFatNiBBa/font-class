
import { Icon } from "../../index";

/**
 * A component that renders the `5` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/5?s=light 5}
 * @preview ![5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/5.svg)
 */
const $5: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48.5 44.1C50.3 37 56.7 32 64 32l208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L76.5 64l-40 160L192 224c70.7 0 128 57.3 128 128s-57.3 128-128 128L84.5 480c-33.3 0-63.8-18.8-78.7-48.6l-4.1-8.2c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2l4.1 8.2c9.5 19 28.9 31 50.1 31L192 448c53 0 96-43 96-96s-43-96-96-96L16 256c-4.9 0-9.6-2.3-12.6-6.2s-4.1-8.9-2.9-13.7l48-192z" />
    </Icon>
);

export default $5;
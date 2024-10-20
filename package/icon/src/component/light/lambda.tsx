
import { Icon } from "../../index";

/**
 * A component that renders the `lambda` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=light lambda}
 * @preview ![lambda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lambda.svg)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l123.5 0c6.2 0 11.9 3.6 14.5 9.3l7.6 16.5-.3-.1-160 368c-3.5 8.1 .2 17.5 8.3 21.1s17.5-.2 21.1-8.3L179.4 128.3 328.9 452.1c7.8 17 24.9 27.9 43.6 27.9l59.5 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-59.5 0c-6.2 0-11.9-3.6-14.5-9.3L183.1 59.9c-7.8-17-24.9-27.9-43.6-27.9L16 32z" />
    </Icon>
);

export default Lambda;
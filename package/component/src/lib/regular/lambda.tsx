
import { Icon } from "../../index";

/**
 * A component that renders the `lambda` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=regular lambda}
 * @preview ![lambda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lambda.svg)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l108.6 0c3 0 5.7 1.7 7.1 4.3l10.2 19.6L2 446.5c-5.3 12.2 .4 26.3 12.5 31.5s26.3-.3 31.5-12.5L178.4 158.9l151.3 291c9.6 18.5 28.8 30.2 49.7 30.2l44.6 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-44.6 0c-3 0-5.7-1.7-7.1-4.3L182.3 62.2C172.6 43.6 153.5 32 132.6 32L24 32z" />
    </Icon>
);

export default Lambda;
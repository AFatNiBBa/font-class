
import { Icon } from "../../index";

/**
 * A component that renders the `lambda` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=thin lambda}
 * @preview ![lambda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lambda.svg)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l123.9 0c9.2 0 17.6 5.3 21.6 13.6l21.1 43.9L16.7 468.8c-1.8 4.1 .1 8.8 4.1 10.5s8.8-.1 10.5-4.1L183.8 124.5 344.1 457.4c6.7 13.8 20.7 22.6 36 22.6l59.9 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-59.9 0c-9.2 0-17.6-5.3-21.6-13.6L167.9 54.6c-6.7-13.8-20.7-22.6-36-22.6L8 32z" />
    </Icon>
);

export default Lambda;

import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=sharp-regular reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path d="M461.7 427c-35.8 37.4-77.7 53-77.7 53s30.1-30.1 31.9-75.7c.1-1.4 .1-2.8 .1-4.3c0-61.9-50.1-112-112-112l-32 0-48 0 0 48 0 12.2 0 .9 0 34.9-32 0-16-14.7L35.5 240.6 0 208l35.5-32.6L176 46.7 192 32l32 0 0 34.9 0 .9L224 80l0 48 48 0 64 0c97.2 0 176 78.8 176 176c0 54.8-23.5 95-50.3 123zm-5.8-77.6C460.9 336 464 321 464 304c0-70.7-57.3-128-128-128l-112 0-48 0 0-48 0-16.2L71 208l105 96.2 0-16.2 0-48 48 0 80 0c70.7 0 130.6 45.8 151.8 109.4z" />
    </Icon>
);

export default Reply;
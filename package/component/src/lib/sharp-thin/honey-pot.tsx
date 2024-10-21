
import { Icon } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=sharp-thin honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 48l0 48-80 0-80 0 0 16 80 0c61.9 0 112 50.1 112 112c0 5.4-.1 10.8-.4 16L16.4 240c-.2-5.2-.4-10.6-.4-16c0-61.9 50.1-112 112-112l0-16L48 96l0-48 104 0 0 112 0 8 8 0 40 0 8 0 0-8 0-112 192 0zm30.5 208c-2.9 30-9.7 56.7-18.7 80L36.3 336c-9-23.3-15.8-50-18.7-80l413 0zM405 352c-10.1 22-21.9 40.8-33.7 56.3c-15.2 19.9-30.4 34.6-41.7 44.3c-5.6 4.8-10.3 8.4-13.5 10.7l-1 .7-182.2 0-1-.7c-3.2-2.3-7.8-5.8-13.5-10.7c-11.3-9.7-26.5-24.3-41.7-44.3C64.9 392.8 53 374 43 352l362 0zM168 48l24 0 0 104-24 0 0-104zM48 112l18 0C26.6 133.8 0 175.8 0 224C0 400 128 480 128 480l192 0s128-80 128-256c0-48.2-26.6-90.2-66-112l18 0 16 0 0-16 0-48 0-16-16 0L48 32 32 32l0 16 0 48 0 16 16 0z" />
    </Icon>
);

export default HoneyPot;